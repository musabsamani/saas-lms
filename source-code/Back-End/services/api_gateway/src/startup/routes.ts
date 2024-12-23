import express, { Application } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import { errorMiddleware } from "../middlewares/errorMiddleware";
import { router } from "../router";
import { handleUndefinedEndpoint } from "../middlewares/handleUndefinedEndpoint";
import winston from "winston";
import { apiUrls } from "../config";

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
export const routes = async (app: Application) => {
  try {
    // Middleware to parse cookies
    app.use(cookieParser());

    // Enable CORS for all routes
    app.use(cors({ origin: apiUrls.baseUrl, credentials: true }));

    // Log HTTP requests in 'dev' mode using Morgan
    app.use(morgan("dev"));

    // Middleware to parse URL-encoded bodies and JSON bodies
    app.use(express.urlencoded({ extended: true }));

    // Middleware to parse JSON bodies
    app.use(express.json());

    // API routes under the '/api/v1' path
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
  } catch (err) {
    winston.error("Routes Error: ", err);
  }
};
