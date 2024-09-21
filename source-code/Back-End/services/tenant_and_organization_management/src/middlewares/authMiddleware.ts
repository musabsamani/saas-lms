import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { customRequest } from "../interfaces";
import { createResponseObject } from "../utils/createResponseObject";
import { HttpError } from "../errors/httpError";

// Load environment variables from .env file
dotenv.config();

export const authMiddleware = (req: customRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];

    //   check if token exists
    if (!token) throw new HttpError({ message: "Authentication token is missing", statusCode: 401 });

    if (!process.env.JWT_SECRET) throw new HttpError({ message: "JWT secret in the environment variables is missing", statusCode: 500 });

    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!);
    } catch (err) {
      throw new HttpError({ message: "Invalid token", statusCode: 401 });
    }

    const role = decoded?.userRole;
    // check if user role is exists and valid
    if (!role) throw new HttpError({ message: "User role in the authentication token is missing", statusCode: 401 });
    req.userRole = role;

    const tenantId = Number(decoded?.tenantId);
    // Set the tenantId in the request object
    req.tenantId = tenantId;

    // if user role is not an admin, set the tenantId in the request
    // so  that the user only access the data of his own tenant
    if (role !== "saasAdmin") {
      // check if tenantId is exists and valid
      if (!tenantId) throw new HttpError({ message: "Tenant ID in the authentication token is missing or invalid", statusCode: 401 });
    }

    // Pass the request to the next middleware or route handler
    return next();
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.statusCode || 401).json(createResponseObject({ error: { message: error.message || "Tenant ID is missing or invalid" } }));
    }
    return res.status(401).json(createResponseObject({ error: { message: "unauthorized" } }));
  }
};
