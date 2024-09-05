import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import errorMiddleware from "../middlewares/errorMiddleware";
import { apiGatewayRouter } from "../routes";

export const routes = (app: Application) => {
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.urlencoded());
  app.use(express.json());

  // api routes
  app.use("/api", apiGatewayRouter);

  // error middleware runs after all routes if error is thrown
  app.use(errorMiddleware);
};
