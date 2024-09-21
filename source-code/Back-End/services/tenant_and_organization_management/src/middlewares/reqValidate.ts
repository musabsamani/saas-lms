import { NextFunction, Request, Response } from "express";
import { createResponseObject } from "../utils/createResponseObject";
import Joi from "joi";
export const reqValidate = (validator: Function) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const { error } = validator(req.body);
    if (error) {
      const joiError = error as Joi.ValidationError;
      return res.status(400).json(createResponseObject({ error: { message: "Bad Request", details: joiError.details } }));
    }
    return next();
  };
};
