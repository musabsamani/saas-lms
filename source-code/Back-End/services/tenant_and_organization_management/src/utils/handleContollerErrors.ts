import { Response } from "express";
import { HttpError } from "../errors/httpError";
import { createResponseObject } from "./createResponseObject";

interface controllerError {
  res: Response;
  error: unknown;
  defaultErrorMessage: string;
}

/**
 * Handles errors that occur during the execution of a controller
 * @param {Object} props - Error handling properties
 * @param {string} props.defaultErrorMessage - The default error message to return if the error is not an instance of HttpError
 * @param {Response} props.res - The Express Response object
 * @param {unknown} props.error - The error that occurred during the execution of the controller
 * @returns {Response} - The error response to send to the client
 */
export const handleControllerError = <T>({ defaultErrorMessage, res, error }: controllerError): Response => {
  try {
    if (error instanceof HttpError) {
      return res.status(error?.statusCode || 500).json(createResponseObject<T>({ error: { message: defaultErrorMessage, details: error.message } }));
    }
    return res.status(500).json(createResponseObject<T>({ error: { message: defaultErrorMessage, details: "Internal server error" } }));
  } catch (err) {
    return res.status(500).json(createResponseObject<T>({ error: { message: defaultErrorMessage, details: "Internal server error" } }));
  }
};
