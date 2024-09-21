import { Request, Response, Router } from "express";
import { createResponseObject } from "../utils/createResponseObject";

/**
 * @route GET /
 * @description A health check endpoint for the API Gateway. It returns a JSON response indicating that the API Gateway is up and running.
 * This endpoint is mainly used to verify that the API Gateway is active and responding to requests.
 *
 * @group API Gateway - Health Check
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Response} 200 - A JSON object with a welcome message and details about the API Gateway's status.
 * @example Success Response:
 * {
 *   "message": "Hello World!",
 *   "details": "API_Gateway is up and running"
 * }
 */
export const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.json(createResponseObject({ data: { message: "Hello World!", details: `${process.env.CURRENT_SERVICE_NAME} is up and running` } }));
});
