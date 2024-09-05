import { Request, Response, NextFunction } from "express";
import winston from "winston";

export default function (err: Error, req: Request, res: Response, next: NextFunction) {
  winston.error({ message: err.message, stack: err.stack });
  return res.status(500).json({ error: { message: "Something went wrong!", error: err.message } });
}
