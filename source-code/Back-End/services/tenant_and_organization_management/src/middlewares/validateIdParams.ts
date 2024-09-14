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
export function validateIdParams(req: Request, res: Response, next: NextFunction): Response | void {
  const tenantId = Number(req.params.id);

  // Validate if the tenantId is a number and is greater than 0
  if (isNaN(tenantId) || tenantId <= 0) {
    return res.status(400).json({ error: { message: "Invalid id in request parameters" } });
  }

  next();
}
