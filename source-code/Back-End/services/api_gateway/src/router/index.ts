import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { router as routeToServices } from "./routeToServices";
import { router as healthCheckEndPoint } from "./healthCheckEndPoint";

/**
 * @constant {Router} router - The main router for the API Gateway.
 * @description Mounts the routers for the different services and routes.
 *
 * - `routeToServices`: Handles routing for microservice endpoints configured in the API Gateway.
 * - `greeting`: Provides a simple health check endpoint.
 */
export const router: Router = Router();

// router.use(authMiddleware);
router.use(routeToServices);

router.use(healthCheckEndPoint);
