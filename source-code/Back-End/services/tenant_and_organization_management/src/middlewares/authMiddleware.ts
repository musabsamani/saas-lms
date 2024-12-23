import { Request, Response, NextFunction } from "express";
import axios, { AxiosError } from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createResponseObject } from "../utils/createResponseObject";
import { customRequest } from "../interfaces";
import { HttpError } from "../errors/httpError";
import { apiUrls } from "../config";

// Load environment variables
dotenv.config();

export const authMiddleware = async (req: customRequest, res: Response, next: NextFunction) => {
  try {
    req.user = req.headers.user ? JSON.parse(req.headers.user as string) : null;

    return next(); // Pass control to the next middleware/handler
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.statusCode || 401).json(createResponseObject({ error: { message: "Unauthorized", details: error.message } }));
    }
    return res.status(401).json(createResponseObject({ error: { message: "Unauthorized" } }));
  }
};
