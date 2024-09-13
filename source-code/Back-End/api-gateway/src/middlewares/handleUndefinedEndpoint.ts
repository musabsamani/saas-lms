import { NextFunction, Request, Response } from "express";

/**
 * This middleware catch requests to undefined endpoints.
 *
 * Handles undefined endpoints (404 errors) by responding with a JSON response
 * containing the error message and the endpoint path that was not found.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The Express NextFunction callback.
 * @returns {Response} - The Express Response object with the 404 error response.
 */

export const handleUndefinedEndpoint = (req: Request, res: Response, next: NextFunction): Response => {
  return res.status(404).json({
    error: {
      message: "API endpoint not found",
      details: `Path ${req.originalUrl} not found on service ${process.env.CURRENT_TENANT_SERVICE}`,
    },
  });
};
