import { Request, Response, NextFunction } from "express";
import { HttpError } from "../errors/httpError";

export const validateReqParamsIdMatch = (req: Request, res: Response, next: NextFunction) => {
  const paramsId = Number(req.params.id);
  const requestId = Number(req.body.id);

  if (paramsId !== requestId) {
    throw new HttpError({ message: "ID in request parameters and request body do not match", statusCode: 400 });
  }

  next(); // Proceed to the next middleware or controller
};
