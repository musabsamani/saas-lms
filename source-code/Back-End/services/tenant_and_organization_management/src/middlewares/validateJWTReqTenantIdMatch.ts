import { Request, Response, NextFunction } from "express";
import { HttpError } from "../errors/httpError";
import { customRequest } from "../interfaces";

// Middleware to ensure that the tenant ID in the request body matches the tenant ID from the authenticated user
export const validateJWTReqTenantIdMatch = (type: "body" | "params") => {
  return (req: customRequest, res: Response, next: NextFunction) => {
    const tenantIdFromAuth = req.tenantId;
    const tenantIdFromRequest: number = type === "body" ? Number(req.body.tenantId) : Number(req.params.id);

    // Check if the tenant ID from the authenticated user matches the tenant ID in the request body
    if (req.userRole !== "saasAdmin") {
      if (tenantIdFromAuth !== tenantIdFromRequest) {
        throw new HttpError({ message: `Forbidden: Tenant ID in the request ${type} does not match the authenticated user's Tenant ID`, statusCode: 403 });
      }
    }

    next(); // Proceed to the next middleware or controller
  };
};
