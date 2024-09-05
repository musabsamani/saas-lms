import winston from "winston";
import express, { Application } from "express";
import { Server } from "http";
import { logging } from "./startup/logging";
import { database } from "./startup/database";
import { production } from "./startup/production";
import { routes } from "./startup/routes";

const app: Application = express();
const PORT = Number(process.env.API_GATEWAY_PORT) || 3000;

logging();
database();
routes(app);
production(app);

const server: Server = app.listen(PORT, () => {
  winston.info(`API Gateway is running on http://localhost:${PORT}`);
});

export default server;
// npm i compression cors dotenv dotnet express helmet jsonwebtoken morgan winston
// npm i -D@types/axios @types/compression @types/cors @types/express @types/jsonwebtoken @types/morgan @types/node @types/winston nodemon prisma ts-node typescript
