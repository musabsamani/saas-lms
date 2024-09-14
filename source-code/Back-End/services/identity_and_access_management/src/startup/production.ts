import helmet from "helmet";
import compression from "compression";
import { Application } from "express";

/**
 * Configures the Express application for production mode.
 *
 * This function initializes two security-related middlewares:
 * - `helmet` to set various HTTP headers to improve security.
 * - `compression` to compress the response bodies.
 *
 * @param {Application} app - The Express application instance.
 */

export const production = (app: Application) => {
  app.use(helmet());
  app.use(compression());
};
