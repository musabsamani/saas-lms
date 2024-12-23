import { Response } from "express";
import { UserService } from "../services/userService";
import { createUserDTO, userResponseDTO, updateUserDTO } from "../interfaces/users";
import { handleControllerError } from "../utils/handleContollerErrors";
import { createResponseObject } from "../utils/createResponseObject";
import { customRequest } from "../interfaces";
import { getHashPassword, isValidPassword } from "../utils/verifyPassword";
// import { generateToken } from "../utils/jwt";
import { HttpError } from "../errors/httpError";

// Instantiate the user service
const userService = new UserService();

/**
 * Controller function to login a user
 * @param req Express customRequest object containing the email/username and password in the request body
 * @param res Express Response object
 * @returns A Express Response object with the user data if found, otherwise throws an error
 * @throws {HttpError} if the user is not found or if the password is invalid
 * @throws {HttpError} if there is an internal server error
 */
export const loginUser = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract user ID from customRequest parameters
    const { tenantId, emailOrUsername, password } = req.body;

    // Call the database service to get the user by the tenantId + email or username
    const user = await userService.loginUser({ tenantId, emailOrUsername });

    if (!user) throw new HttpError({ message: "Invalid credentials", statusCode: 401 });
    const { password: hashedPassword, ...userWithoutPassword } = user;
    try {
      await isValidPassword(password, hashedPassword);
    } catch (err) {
      const error = err as HttpError;
      if (error.statusCode === 401) {
        throw new HttpError({ message: "Invalid credentials", statusCode: 401 });
      } else {
        throw new HttpError({ message: "Internal server error", statusCode: 500 });
      }
    }
    // const token = generateToken({ user: userWithoutPassword });
    // Respond with the user data if successfully logged in

    return (
      res
        .status(200)
        // .clearCookie("refreshToken", "token here",{
        //   httpOnly: true,
        //   secure: process.env.NODE_ENV === "production" ? true : false, // Set to true in production with HTTPS
        //   sameSite: "strict",
        // })
        // .setHeader("Authorization", `Bearer ${token}`)
        .json(createResponseObject<userResponseDTO>({ data: userWithoutPassword }))
    );
  } catch (error) {
    // Handle any errors that occur during the login of a user
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to login user" });
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
