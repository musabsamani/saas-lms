import bcrypt from "bcrypt";
import { HttpError } from "../errors/httpError";
import { SALT_ROUNDS } from "../config/constants";

export const getHashPassword = async (password: string) => {
  try {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return hash;
  } catch (error) {
    throw new HttpError({ message: "Error hashing password", statusCode: 500 });
  }
};

export const isValidPassword = async (password: string, hashedPassword: string) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    if (match) {
      return true;
    } else {
      throw new HttpError({ message: "Invalid credentials", statusCode: 401 });
    }
  } catch (error) {
    if (error instanceof HttpError) {
      throw new HttpError({ message: error.message, details: error.details, statusCode: error.statusCode });
    }
    throw new HttpError({ message: "Error verifying password", statusCode: 500 });
  }
};
