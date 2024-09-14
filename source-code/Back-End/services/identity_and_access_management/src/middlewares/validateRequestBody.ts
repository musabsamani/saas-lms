import { NextFunction, Request, Response } from "express";
import Joi from "joi";

/**
 * Middleware to validate the request body using a Joi schema.
 *
 * This middleware checks if the request body conforms to the passed `validationSchema`.
 * It removes any unknown keys that are not defined in the schema.
 * If validation fails, it returns a 400 status with the validation details.
 *
 * @param {Joi.Schema} validationSchema - The Joi schema to validate the request body against.
 * A middleware function that validates the request body.
 */
export function validateRequestBody(validationSchema: Joi.Schema) {
  return (req: Request, res: Response, next: NextFunction): Response | void => {
    // Check if the request body is empty
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: { message: "Empty request body", statusCode: 400 } });
    }

    // Validate the request body against the schema
    const { error, value } = validationSchema.validate(req.body, {
      stripUnknown: true, // Remove unknown keys not defined in the schema
    });

    if (error) {
      // If validation fails, return the error details to the client
      return res.status(400).json({ error: { message: "Validation error", details: error.details } });
    }

    // If validation succeeds, assign the validated value to the request body
    req.body = value;
    next();
  };
}
