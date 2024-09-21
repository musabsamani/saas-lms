import { Router } from "express";
import { router as routeToServices } from "./routeToServices";
import { router as greeting } from "./greeting";

/**
 * @constant {Router} router - The main router for the API Gateway.
 * @description Mounts the routers for the different services and routes.
 *
 * - `routeToServices`: Handles routing for microservice endpoints configured in the API Gateway.
 * - `greeting`: Provides a simple health check endpoint or other basic responses.
 */
export const router: Router = Router();

router.use(routeToServices);

router.use(greeting);
