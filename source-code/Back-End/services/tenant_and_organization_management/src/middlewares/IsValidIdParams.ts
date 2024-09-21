import { HttpError } from "../errors/httpError";
import { NextFunction, Request, Response } from "express";

/**
 * Middleware to validate the `id` parameter in the request URL.
 *
 * This middleware checks if the `id` parameter is a valid number and greater than 0.
 * If validation fails, it returns a 400 status with an error message.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The Express NextFunction callback to move to the next middleware.
 * @returns {Response | void} A 400 error response if validation fails, otherwise calls next().
 */
export function IsValidIdParams(req: Request, res: Response, next: NextFunction): Response | void {
  const id = Number(req.params.id);

  // Validate if the tenantId is a number and is greater than 0
  if (isNaN(id) || id <= 0) {
    throw new HttpError({ message: "Invalid id in request parameters", statusCode: 400 });
  }

  next();
}
