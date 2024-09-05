import winston from "winston";
import express, { Application } from "express";
import { Server } from "http";
import { logging } from "./startup/logging";
import { database } from "./startup/database";
import { production } from "./startup/production";
import { routes } from "./startup/routes";

const app: Application = express();
const PORT = Number(process.env.TENANT_PORT) || 3000;

logging();
database();
routes(app);
production(app);

const server: Server = app.listen(PORT, () => {
  winston.info(`API Gateway is running on http://localhost:${PORT}`);
});

export default server;
