import { Request, Response, NextFunction } from "express";
import winston from "winston";
import { createResponseObject } from "../utils/createResponseObject";
import { HttpError } from "../errors/httpError";

/**
 * Express error-handling middleware to handle any uncaught errors in the application.
 *
 * This middleware catches any errors that are not caught by route handlers or other middleware.
 * It logs the error details using the Winston logger and responds with a 500 Internal Server Error.
 *
 * @param {Error} err - The error object that was thrown.
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The Express NextFunction callback (unused but required).
 * @returns {Response} - The Express Response object with the error details.
 */
export const errorMiddleware = (err: Error, req: Request, res: Response): Response => {
  // Log the error details using Winston

  winston.error({ message: err.message, stack: err.stack });
  if (err instanceof HttpError) {
    return res.status(err?.statusCode || 500).json(createResponseObject({ error: { message: err.message || "Internal server error" } }));
  }
  // Respond with a 500 status code and error details
  return res.status(500).json(createResponseObject({ error: { message: "Internal server error", details: err.message } }));
};
