import { Request, Response, NextFunction } from "express";
import winston from "winston";

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
export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction): Response => {
  // Log the error details using Winston
  winston.error({ message: err.message, stack: err.stack });

  // Respond with a 500 status code and error details
  return res.status(500).json({
    error: {
      message: "Internal server error",
      details: err.message,
    },
  });
};
