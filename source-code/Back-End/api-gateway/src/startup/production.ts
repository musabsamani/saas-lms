import helmet from "helmet";
import compression from "compression";
import { Application } from "express";

export const production = (app: Application) => {
  app.use(helmet());
  app.use(compression());
};
