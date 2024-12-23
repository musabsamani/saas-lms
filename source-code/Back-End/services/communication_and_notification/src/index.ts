import winston from "winston";
import express, { Application } from "express";
import { Server } from "http";
import { logging } from "./startup/logging";
import { database } from "./startup/database";
import { production } from "./startup/production";
import { routes } from "./startup/routes";

const app: Application = express();
const PORT = Number(process.env.CURRENT_SERVICE_PORT) || 3000;
const SERVICE_NAME = process.env.CURRENT_SERVICE_NAME;

/**
 * Initializes the logging for the application.
 *
 * This includes setting up the Winston logger to handle uncaught exceptions,
 * logging levels, and ensuring logs are handled correctly based on the environment.
 */
logging();

/**
 * Establishes a connection to the PostgreSQL database using Prisma.
 *
 * This function connects to the database, logs the connection status,
 * and ensures that the Prisma client disconnects when the process ends.
 */
database();

/**
 * Configures routes and middleware for the application.
 *
 * This function sets up the API routes, error handling, and middleware
 * such as CORS and body parsers for handling incoming requests.
 *
 * @param {Application} app - The Express application instance.
 */
routes(app);

/**
 * Configures production-specific settings for the application.
 *
 * This function sets up security configurations, compression,
 * and other optimizations necessary for running in a production environment.
 *
 * @param {Application} app - The Express application instance.
 */
production(app);

/**
 * Starts the Express server and listens on the specified port.
 *
 * The server starts listening on the port defined by the environment variable
 * `TENANT_SERVICE_PORT`, or defaults to port 3000 if the environment variable is not set.
 * Once the server is running, Winston logs the service name and the URL.
 *
 * @returns {Server} - The HTTP server instance that the app is running on.
 */
const server: Server = app.listen(PORT, () => {
  winston.info(`${SERVICE_NAME} is running on http://localhost:${PORT} ...`);
});

export default server;
