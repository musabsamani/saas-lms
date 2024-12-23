import { Request, Response, NextFunction } from "express";
import { createResponseObject } from "../utils/createResponseObject";
import { HttpError } from "../errors/httpError";
import { customRequest } from "../interfaces";

// Middleware to ensure that the tenant ID in the request body matches the tenant ID from the authenticated user
export const validateTenantIdMatch = (req: customRequest, res: Response, next: NextFunction) => {
  try {
    const tenantIdFromJWT = req.user?.tenantId;
    const tenantIdFromReqBody: number = Number(req.body.tenantId);

    // Check if the tenant ID is missing in the request
    if (tenantIdFromReqBody === undefined || tenantIdFromReqBody === null) {
      throw new HttpError({ message: `Missing Tenant ID in the request body`, statusCode: 400 });
    }

    // Check if the tenant ID is missing in the request
    if (isNaN(tenantIdFromReqBody)) {
      throw new HttpError({ message: `Invalid Tenant ID in the request body`, statusCode: 400 });
    }

    // Check if the tenant ID from the authenticated user matches the tenant ID in the request body
    if (req.user?.userRole !== "saasOwner" && tenantIdFromJWT !== tenantIdFromReqBody) {
      throw new HttpError({ message: `Forbidden: Tenant ID in the request body does not match the authenticated user's Tenant ID`, statusCode: 403 });
    }

    return next(); // Proceed to the next middleware or controller
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.statusCode || 500).json(createResponseObject({ error: { message: error.message, details: error.details } }));
    }
    return res.status(500).json(createResponseObject({ error: { message: "error verifying tenantId matching" } }));
  }
};
