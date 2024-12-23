import { Response, NextFunction } from "express";
import { createResponseObject } from "../utils/createResponseObject";
import { extractTokenFromHeader, verifyToken } from "../utils/jwt";
import { isValidTenantId } from "../utils/isValidTenantId";
import { HttpError } from "../errors/httpError";
import { customRequest } from "../interfaces";
import { ROLES } from "../config/roles";

export const authMiddleware = async (req: customRequest, res: Response, next: NextFunction) => {
  try {
    // req.user = req.headers.user ? JSON.parse(req.headers.user as string) : null;

    const token = extractTokenFromHeader(req);

    const decodedToken = verifyToken(token);

    // Determine where the tenantId should come from based on the user role
    const tenantId = decodedToken.userRole === ROLES.SAAS_OWNER ? req.body.tenantId : decodedToken.tenantId;

    // // check the tenantId if user is not a saasOwner
    // if (decodedToken.userRole !== ROLES.SAAS_OWNER) {
    //   await isValidTenantId(tenantId, token);
    // }

    // // check the tenantId if it is present in the request body and user is saasOwner
    // if (decodedToken.userRole === ROLES.SAAS_OWNER && req.body.tenantId) {
    //   await isValidTenantId(tenantId, token, true);
    // }
    req.user = { tenantId: Number(tenantId), userRole: decodedToken.userRole, permissions: decodedToken.permissions, token };

    return next(); // Pass control to the next middleware/handler
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.statusCode || 401).json(createResponseObject({ error: { message: "Unauthorized", details: error.message } }));
    }
    return res.status(401).json(createResponseObject({ error: { message: "Unauthorized" } }));
  }
};
