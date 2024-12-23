import bcrypt from "bcrypt";
import { Response } from "express";
import { UserService } from "../services/userService";
import { createUserDTO, userResponseDTO, updateUserDTO } from "../interfaces/users";
import { handleControllerError } from "../utils/handleContollerErrors";
import { createResponseObject } from "../utils/createResponseObject";
import { customRequest } from "../interfaces";
import { getHashPassword } from "../utils/verifyPassword";

// Instantiate the user service
const userService = new UserService();

/**
 * Controller function to get all users from across all tenants in the database
 *
 * It used by the SaaS Owner only
 *
 * @param req Express Request object
 * @param res Express Response object
 * @returns A Express Response object with the list of users
 */
export const getAllUsers = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Call the database service to retrieve all users
    const users = await userService.getAllUsers();

    // Respond with the list of users
    return res.status(200).json(createResponseObject<userResponseDTO[]>({ data: users }));
  } catch (error) {
    // Handle any errors that occur during the retrieval of users
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to retrieve users" });
  }
};

/**
 * Controller function to get all users only (softe-deleted ones not included)
 * @param req Express customRequest object
 * @param res Express Response object
 * @returns A Express Response object with the list of users
 */
export const getUsers = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract tenant ID from customRequest parameters
    const tenantId = req.user?.tenantId;

    // Call the database service to retrieve all users for the specified tenant
    const users = await userService.getUsers(tenantId!);

    // Respond with the list of users
    return res.status(200).json(createResponseObject<userResponseDTO[]>({ data: users }));
  } catch (error) {
    // Handle any errors that occur during the retrieval of users
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to retrieve users" });
  }
};

/**
 * Controller function to get a user by ID
 * @param req Express customRequest object containing the user ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the retrieved user
 */
export const getUserById = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract user ID from customRequest parameters
    const userId = Number(req.params.id);

    // Extract tenant ID from the customRequest
    const tenantId = req.user?.tenantId!;

    // Call the database service to get the user by ID
    const user = await userService.getUserById({ userId, tenantId });

    // Respond with the user data if found
    return res.status(200).json(createResponseObject<userResponseDTO>({ data: user }));
  } catch (error) {
    // Handle any errors that occur during the retrieval of a user
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to retrieve user" });
  }
};

/**
 * Controller function to create a new user
 * @param req Express Request object
 * @param res Express Response object
 * @returns A Express Response object with the newly created user
 */
export const createUser = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract user data from request body
    const requestBody: createUserDTO = req.body;

    // Hash the user's password
    requestBody.password = await getHashPassword(requestBody.password);

    // Call the database service to create a new user
    const newUser = await userService.createUser(requestBody);

    // Respond with the newly created user data
    return res.status(201).json(createResponseObject<userResponseDTO>({ data: newUser }));
  } catch (error) {
    // Handle any errors that occur during the creation of a user
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to create user" });
  }
};

/**
 * Controller function to update a user
 * @param req Express Request object containing the user ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the updated user
 */
export const updateUser = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract user ID and updated data from request
    const userId = Number(req.params.id);

    // Extract user data from request parameters
    const updateData: updateUserDTO = req.body;
    // Call the database service to update the user
    const updatedUser = await userService.updateUser(userId, updateData);
    return res.status(200).json(createResponseObject<userResponseDTO>({ data: updatedUser }));
  } catch (error) {
    // Handle any errors that occur during the update of a user
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to update user" });
  }
};

/**
 * Controller function to delete a user
 * @param req Express Request object containing the user ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the deleted user
 */
export const deleteUser = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract user ID from request parameters
    const userId = Number(req.params.id);

    // Call the database service to delete the user
    const deletedUser = await userService.deleteUser(userId);
    return res.status(200).json(createResponseObject<userResponseDTO>({ data: { message: "User deleted successfully", data: deletedUser } }));
  } catch (error) {
    // Handle any errors that occur during the deletion of a user
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to delete user" });
  }
};
