import { Response, NextFunction } from "express";
import { customRequest } from "../interfaces";
import { createResponseObject } from "../utils/createResponseObject";

export const authIsAdmin = (req: customRequest, res: Response, next: NextFunction) => {
  if (req.userRole !== "saasAdmin") {
    return res.status(403).json(
      createResponseObject({
        error: { message: "Forbidden: User is not a Saas Admin. You do not have permission to access this resource." },
      })
    );
  }
  return next();
};
