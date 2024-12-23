import winston from "winston";
import dotenv from "dotenv";
import { Prisma, PrismaClient, User } from "@prisma/client";
import { HttpError } from "../errors/httpError";
import { createUserDTO, updateUserDTO, userResponseDTO } from "../interfaces/users";
import { handleDatabaseError } from "../utils/handleDatabaseErrors";

// Load environment variables from .env file
dotenv.config();

// Instantiate Prisma Client
const prisma = new PrismaClient();

export class UserService {
  /**
   * Retrieves all users from the database across all tenants
   * @returns An array of all users if successful, otherwise throws an error
   */
  public async getAllUsers(): Promise<userResponseDTO[] | never> {
    try {
      return await prisma.user.findMany({
        select: {
          phone: true,
          address: true,
          sex: true,
          birthday: true,
          profileImageUrl: true,
          name: true,
          tenantId: true,
          email: true,
          username: true,
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      handleDatabaseError("Could not retrieve users", error);
    }
  }
  /**
   * Retrieves all users from the database
   * @returns An array of all users in the database if successful, otherwise throws an error
   */
  public async getUsers(tenantId: number): Promise<userResponseDTO[] | never> {
    try {
      return await prisma.user.findMany({
        where: { tenantId },
        select: {
          phone: true,
          address: true,
          sex: true,
          birthday: true,
          profileImageUrl: true,
          name: true,
          tenantId: true,
          email: true,
          username: true,
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      handleDatabaseError("Could not retrieve users", error);
    }
  }

  /**
   * Retrieves a single user by its ID
   * @param userId The ID of the user to retrieve
   * @returns The user if found, otherwise throws a 404 error
   */
  public async getUserById({ userId, tenantId }: { tenantId: number; userId: number }): Promise<userResponseDTO | never> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId, tenantId },
        select: {
          phone: true,
          address: true,
          sex: true,
          birthday: true,
          profileImageUrl: true,
          name: true,
          tenantId: true,
          email: true,
          username: true,
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      if (!user) throw new HttpError({ message: "User not found", statusCode: 404 });
      return user;
    } catch (error) {
      console.log(error);
      winston.error("Error while retrieving user in database service", error);
      handleDatabaseError("Could not retrieve user", error);
    }
  }

  /**
   * Creates a new user in the database
   * @param data The data to create a new user
   * @returns The created user if successful, otherwise throws an error
   */
  public async createUser(data: createUserDTO): Promise<userResponseDTO | never> {
    try {
      return await prisma.user.create({
        data,
        select: {
          phone: true,
          address: true,
          sex: true,
          birthday: true,
          profileImageUrl: true,
          name: true,
          tenantId: true,
          email: true,
          username: true,
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      handleDatabaseError("Could not create user", error);
    }
  }

  /**
   * Updates a user's details in the database
   * @param userId The ID of the user to update
   * @param data The new data to update the user with
   * @returns The updated user if successful, otherwise throws an error
   */
  public async updateUser(userId: number, data: updateUserDTO): Promise<userResponseDTO | never> {
    try {
      const existingUser = await prisma.user.findUnique({ where: { id: userId } });
      if (existingUser && existingUser.updatedAt.toString() !== data.updatedAt.toString()) {
        throw new HttpError({ message: "Version conflict: The record has been modified by another process", statusCode: 409 });
      }

      const { updatedAt, ...newdata } = { ...data };
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        select: {
          phone: true,
          address: true,
          sex: true,
          birthday: true,
          profileImageUrl: true,
          name: true,
          tenantId: true,
          email: true,
          username: true,
          id: true,
          createdAt: true,
          updatedAt: true,
        },
        data: newdata,
      });

      // Check if the update was unsuccessful
      if (!updatedUser) {
        // Throw an error if the record does not exist
        throw new HttpError({ message: "User not found", statusCode: 404 });
      }
      return updatedUser;
    } catch (error) {
      handleDatabaseError("Could not update user", error);
    }
  }

  /**
   * Deletes a user from the database
   * @param userId The ID of the user to delete
   * @returns The deleted user if successful, otherwise throws an error
   */
  public async deleteUser(userId: number): Promise<userResponseDTO | never> {
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: userId },
        select: {
          phone: true,
          address: true,
          sex: true,
          birthday: true,
          profileImageUrl: true,
          name: true,
          tenantId: true,
          email: true,
          username: true,
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      if (!deletedUser) throw new HttpError({ message: "User not found", statusCode: 404 });
      return deletedUser;
    } catch (error) {
      handleDatabaseError("Could not delete user", error);
    }
  }

  /**
   * Retrieves a user by tenantId and email or username.
   * Determines if the emailOrUsername is an email or username,
   *
   * @param tenantId The ID of the tenant to which the user belongs.
   * @param emailOrUsername The email or username of the user.
   * @returns The User object if found, null if not found, or throws an error if retrieval fails.
   * @throws {HttpError} if there is an error retrieving the user from the database.
   */
  public async loginUser({ tenantId, emailOrUsername }: { tenantId: number; emailOrUsername: string }): Promise<User | null | never> {
    try {
      const isEmail = emailOrUsername.includes("@");
      const whereClause = isEmail
        ? { tenantId_email: { tenantId, email: emailOrUsername } } // For tenantId + email
        : { tenantId_username: { tenantId, username: emailOrUsername } }; // For tenantId + username
      const user = await prisma.user.findUnique({ where: whereClause });

      return user;
    } catch (error) {
      handleDatabaseError("Could not retrieve user", error);
    }
  }
  public async getUserRefreshToken({ tenantId, userId }: { tenantId: number; userId: number }): Promise<string | null | undefined | never> {
    try {
      const user = await prisma.user.findUnique({
        where: { tenantId, id: userId },
      });
      return user?.refreshToken;
    } catch (error) {
      handleDatabaseError("Could not retrive user refresh token", error);
    }
  }
  /**
   * Stores the refresh token for a user in the database.
   * @param tenantId The ID of the tenant to which the user belongs.
   * @param userId The ID of the user for whom the refresh token is being stored.
   * @param refreshToken The refresh token to store.
   * @throws {HttpError} if there is an error updating the refresh token.
   */
  public async storeUserRefreshToken({ tenantId, userId, refreshToken }: { tenantId: number; userId: number; refreshToken: string }) {
    try {
      await prisma.user.update({
        where: { tenantId, id: userId },
        data: { refreshToken },
      });
    } catch (error) {
      handleDatabaseError("Could not update user refresh token", error);
    }
  }

  /**
   * Deletes the refresh token for a user.
   * @param tenantId The ID of the tenant to which the user belongs.
   * @param userId The ID of the user to delete the refresh token for.
   * @param refreshToken The refresh token to delete.
   * @throws {HttpError} if there is an error deleting the refresh token.
   */
  public async deleteUserRefreshToken({ tenantId, userId }: { tenantId: number; userId: number; refreshToken: string }) {
    try {
      await prisma.user.update({
        where: { tenantId, id: userId },
        data: { refreshToken: null },
      });
    } catch (error) {
      handleDatabaseError("Could not delete user refresh token", error);
    }
  }
}
