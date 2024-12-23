import { Response, NextFunction } from "express";
import { createResponseObject } from "../utils/createResponseObject";
import { customRequest } from "../interfaces";
import { permissionsTypes } from "../config/permissions";
import { rolesTypes } from "../config/roles";

interface isAuthorizedInterface {
  allowedPermissions?: permissionsTypes[];
  allowedRoles?: rolesTypes[];
}

/**
 * Middleware to verify if the user has the required permissions and roles to access the resource.
 * If the user does not have the required permissions and roles, it returns a 403 error response.
 * Otherwise, it calls the next middleware or controller.
 *
 * @param options The options object
 * @param {string[]} options.permissions The permissions required to access the resource
 * @param {roleTypes[]} options.roles The roles required to access the resource
 * @returns The middleware function
 */
export const isAuthorized = ({ allowedPermissions, allowedRoles }: isAuthorizedInterface) => {
  return (req: customRequest, res: Response, next: NextFunction) => {
    if (
      (allowedRoles && (!req.user?.userRole || !allowedRoles.includes(req.user?.userRole))) ||
      (allowedPermissions && (!req.user?.permissions || !allowedPermissions.every((permission) => req.user?.permissions.includes(permission))))
    ) {
      return res.status(403).json(
        createResponseObject({
          error: {
            message: `Forbidden: User has not sufficient permissions to access this resource.`,
          },
        })
      );
    }
    return next();
  };
};
