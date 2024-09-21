import { Request, Response, Router } from "express";
import { createResponseObject } from "../utils/createResponseObject";
import { HealthCheckResponse } from "../interfaces";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

/**
 * @route GET /
 * @description A health check endpoint for the Tenant Managment. It returns a JSON response indicating that this service is up and running.
 * This endpoint is mainly used to verify that this service is active and responding to requests.
 *
 * @group Tenant Managment - Health Check
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Response} 200 - A JSON object with a welcome message and details about the Tenant Managment's status.
 * @example Success Response:
 * {
 *   "message": "Hello World!",
 *   "details": "`CURRENT_SERVICE_NAME` is up and running"
 * }
 */
export const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  const response: HealthCheckResponse = {
    data: {
      message: "Hello World!",
      details: `${process.env.CURRENT_SERVICE_NAME} is up and running`,
    },
  };
  return res.json(createResponseObject({ data: response }));
});
