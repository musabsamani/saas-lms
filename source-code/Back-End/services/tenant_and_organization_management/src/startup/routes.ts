import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { errorMiddleware } from "../middlewares/errorMiddleware";
import { handleUndefinedEndpoint } from "../middlewares/handleUndefinedEndpoint";
import { router } from "../router";

/**
 * Configures the Express application with middleware, API routes, and error handling.
 *
 * This function initializes:
 * - CORS middleware to enable Cross-Origin Resource Sharing.
 * - Morgan for logging HTTP requests in development mode.
 * - URL-encoded and JSON middleware to parse incoming request bodies.
 * - Registers the `/api` routes.
 * - Handles undefined endpoints with a 404 response.
 * - Handles global errors with a custom error-handling middleware.
 *
 * @param {Application} app - The Express application instance.
 */
export const routes = (app: Application) => {
  // Enable CORS for all routes
  app.use(cors());

  // Log HTTP requests in 'dev' mode using Morgan
  app.use(morgan("dev"));

  // Middleware to parse URL-encoded bodies and JSON bodies
  app.use(express.urlencoded({ extended: true }));

  // Middleware to parse JSON bodies
  app.use(express.json());

  // All API routes
  app.use("/api/v1", router);

  /**
   * Handle undefined endpoint: This middleware runs after all defined API endpoints
   * and sends a 404 response if the endpoint does not match any of the defined routes.
   */
  app.use(handleUndefinedEndpoint);

  /**
   * Handle errors: This error-handling middleware runs after all routes
   * and catches any errors that occur in the application, sending a 500 error response.
   */
  app.use(errorMiddleware);
};
