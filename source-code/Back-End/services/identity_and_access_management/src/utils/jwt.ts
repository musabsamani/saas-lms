import dotenv from "dotenv";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import { HttpError } from "../errors/httpError";
import { customRequest } from "../interfaces";
import { userResponseDTO } from "../interfaces/users";
import { JWT_EXPIRES, JwtExpiresValues } from "../config/constants";

// Load environment variables
dotenv.config();

/**
 * Helper function to extract the authentication token from the Authorization header.
 *
 * @throws HttpError if the token is missing
 * @param req The Express Request object
 * @returns The extracted token
 */
export const extractTokenFromHeader = (req: customRequest): string => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) throw new HttpError({ message: "Authentication token is missing", statusCode: 401 });

  const token = authHeader.split(" ")[1];
  if (!token) throw new HttpError({ message: "Authentication token is missing", statusCode: 401 });

  return token;
};

/**
 * Helper function to verify JWT token
 * @param token The JWT token to verify
 * @throws HttpError if the token is invalid, or if the JWT secret is missing in environment variables
 * @returns The decoded token
 */
export const verifyToken = ({ token, secret }: { token: string; secret: string | undefined }): any => {
  if (!secret) {
    throw new HttpError({ message: "JWT secret is missing in environment variables", statusCode: 500 });
  }

  try {
    return jwt.verify(token, secret);
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      throw new HttpError({ message: "Token has expired", statusCode: 401 });
    }
    throw new HttpError({ message: "Invalid authentication token", statusCode: 401 });
  }
};

/**
 * Generates a JWT token for the given user
 *
 * @param {Object} payload - contains the user data to be stored in the token
 * @param {userResponseDTO} payload.user - the user data
 * @param {JwtExpiresValues} [payload.expiresIn=JWT_EXPIRES.MEDIUM] - the expiration time of the token
 * @returns {string} the generated JWT token
 * @throws {HttpError} if the JWT secret is missing in environment variables, or if there is an error generating the token
 */
const generateToken = ({ user, secret, expiresIn = JWT_EXPIRES.LONG }: { user: userResponseDTO; secret: string | undefined; expiresIn?: JwtExpiresValues }): string => {
  if (!secret) {
    throw new HttpError({ message: "JWT secret is missing in environment variables", statusCode: 500 });
  }

  try {
    const token = jwt.sign(
      {
        id: user.id,
        tenantId: user.tenantId,
        //   userRole: user.userRole,
        //   permissions: user.permissions,
      },
      secret,
      { expiresIn }
    );
    // JWT_REFRESH_TOKEN_SECRET;
    // JWT_ACCESS_TOKEN_SECRET;
    return token;
  } catch (err) {
    throw new HttpError({ message: "error generating token", statusCode: 500 });
  }
};

export const generateAccessToken = (user: any) => generateToken({ user, secret: process.env.JWT_ACCESS_TOKEN_SECRET, expiresIn: JWT_EXPIRES.VERY_SHORT });

/**
 * Generates a JWT refresh token for the given user
 *
 * @param {userResponseDTO} user - the user data
 * @returns {string} the generated JWT refresh token
 * @throws {HttpError} if the JWT refresh token secret is missing in environment variables, or if there is an error generating the token
 */
export const generateRefreshToken = (user: any) => {
  generateToken({ user, secret: process.env.JWT_REFRESH_TOKEN_SECRET, expiresIn: JWT_EXPIRES.VERY_LONG });
};

export const verifyRefreshToken = (token: string) => {
  verifyToken({ token, secret: process.env.JWT_REFRESH_TOKEN_SECRET });
};
export const verifyAccessToken = (token: string) => {
  verifyToken({ token, secret: process.env.JWT_ACCESS_TOKEN_SECRET });
};
