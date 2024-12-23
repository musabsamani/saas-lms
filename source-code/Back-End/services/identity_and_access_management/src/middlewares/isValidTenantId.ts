import { Response, NextFunction } from "express";
import { isValidTenantId as checkIfValidTenantId } from "../utils/isValidTenantId";
import { HttpError } from "../errors/httpError";
import { customRequest } from "../interfaces";
import { ROLES } from "../config/roles";

export const isValidTenantId = async (req: customRequest, res: Response, next: NextFunction) => {
  if (!req.user || Object.keys(req.user).length === 0) {
    throw new HttpError({ message: "User is not authenticated", statusCode: 401 });
  }
  const { tenantId, userRole, token } = req.user;

  // check if the user is a saasOwner
  if (userRole === ROLES.SAAS_OWNER) {
    // check if tenantId present in the request body
    if (req.body.tenantId) {
      await checkIfValidTenantId(tenantId, token, true);
    }
  } else {
    // check the tenantId if user is not a saasOwner
    await checkIfValidTenantId(tenantId, token);
  }
  next(); // Proceed to the next middleware or controller
};
