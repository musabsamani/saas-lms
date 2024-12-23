import { Request, Response, NextFunction } from "express";
import axios, { AxiosError } from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createResponseObject } from "../utils/createResponseObject";
import { customRequest } from "../interfaces";
import { HttpError } from "../errors/httpError";
import { apiUrls } from "../config";
import { ROLES } from "../config/roles";

// Load environment variables
dotenv.config();

interface AuthOptions {
  isSaasOwner?: boolean;
  isValidTenantId?: boolean;
}

/**
 * Express middleware to authenticate and authorize incoming requests.
 *
 * Verifies the presence and validity of the JWT token in the Authorization header.
 * If the token is valid, it extracts the user role and tenant ID from the token.
 * If the `isValidTenantId` option is set to true, it verifies the tenant ID by
 * sending a GET request to the TENANT_AND_ORGANIZATION_MANAGEMENT_SERVICE_URL
 * with the tenant ID as a parameter.
 * If the `isSaasOwner` option is set to true, it checks if the user role is
 * ROLES.SAAS_ADMIN, and if not, returns a 403 error.
 *
 * @param {AuthOptions} options Optional options to customize the
 * middleware behavior.
 * @returns The middleware function.
 * @throws {HttpError} If the token is invalid or the tenant ID is invalid.
 */
export const authMiddleware = async (req: customRequest, res: Response, next: NextFunction) => {
  try {
    const token = extractToken(req);

    const decodedToken = verifyToken(token);

    // Determine where the tenantId should come from based on the user role
    const tenantId = decodedToken.userRole === ROLES.SAAS_OWNER ? req.body.tenantId : decodedToken.tenantId;

    // check the tenantId if user is not a saasOwner
    if (decodedToken.userRole !== ROLES.SAAS_OWNER) {
      await isValidTenantId(tenantId, token);
    }

    // check the tenantId if it is present in the request body and user is saasOwner
    if (decodedToken.userRole === ROLES.SAAS_OWNER && req.body.tenantId) {
      await isValidTenantId(tenantId, token, true);
    }
    req.user = { tenantId: Number(tenantId), userRole: decodedToken.userRole, permissions: decodedToken.permissions, token };

    return next(); // Pass control to the next middleware/handler
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.statusCode || 401).json(createResponseObject({ error: { message: "Unauthorized", details: error.message } }));
    }
    return res.status(401).json(createResponseObject({ error: { message: "Unauthorized" } }));
  }
};

/**
 * Helper function to extract the authentication token from the Authorization header.
 *
 * @throws HttpError if the token is missing
 * @param req The Express Request object
 * @returns The extracted token
 */
const extractToken = (req: Request): string => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) throw new HttpError({ message: "Authentication token is missing", statusCode: 401 });

  const token = authHeader.split(" ")[1];
  if (!token) throw new HttpError({ message: "Authentication token is missing", statusCode: 401 });

  return token;
};

/**
 * Helper function to verify JWT token
 * @param token The JWT token to verify
 * @throws HttpError if the token is invalid, or if the JWT secret is missing in environment variables
 * @returns The decoded token
 */
const verifyToken = (token: string): any => {
  if (!process.env.JWT_SECRET) {
    throw new HttpError({ message: "JWT secret is missing in environment variables", statusCode: 500 });
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw new HttpError({ message: "Invalid authentication token", statusCode: 401 });
  }
};

/**
 * Helper function to verify tenant existence
 *
 * Verifies if the tenant ID in the authentication token is valid and exists in the Tenant and Organization Management Service
 * @param tenantId The tenant ID to verify
 * @param token The authentication token to use for verification
 * @returns A Promise that resolves if the tenant exists, otherwise rejects with an HttpError
 * @throws HttpError if the tenant ID is invalid or the tenant does not exist
 */
const isValidTenantId = async (tenantId: number, token: string, isSaasOwner?: boolean): Promise<void> => {
  if (!tenantId) {
    throw new HttpError({ message: `Missing tenant ID in the ${isSaasOwner ? "request body" : "authentication token"}`, statusCode: 401 });
  }

  if (isNaN(Number(tenantId))) {
    throw new HttpError({ message: `Invalid tenant ID in the ${isSaasOwner ? "request body" : "authentication token"}`, statusCode: 401 });
  }
  // const tenantBaseUrl = process.env.TENANT_AND_ORGANIZATION_MANAGEMENT_SERVICE_URL;
  const tenantBaseUrl = apiUrls.tenantAndOrganizationManagementService;

  if (!tenantBaseUrl) {
    throw new HttpError({ message: "TENANT_AND_ORGANIZATION_MANAGEMENT_SERVICE URL is missing", statusCode: 500 });
  }

  const url = `${tenantBaseUrl}/api/v1/tenants/${tenantId}`;
  try {
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!data) {
      throw new HttpError({ message: "Invalid tenant ID in the authentication token: Tenant not found", statusCode: 400 });
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new HttpError({ message: err.message, statusCode: 401 });
    }
    if (err instanceof HttpError) {
      throw new HttpError({ message: err.message, statusCode: 401 });
    }
    throw new HttpError({ message: "Error verifying tenant", statusCode: 401 });
  }
};
