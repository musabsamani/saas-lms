import { NextFunction, Request, Response } from "express";

export const reqValidate = (validator: Function) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const { error } = validator(req.body);
    if (error) {
      return res.status(400).json({ message: "Bad Request", error: error.details[0].message });
    }
    return next();
  };
};

// useage
// router.post("/", reqValidate(validate), async (req, res) => {
// router.post("/", [auth, reqValidate(validateReturn)], async (req, res) => {
