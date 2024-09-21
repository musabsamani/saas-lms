import { AxiosError } from "axios";
import { Response } from "express";
import { HttpError } from "../errors/httpError";
import { createResponseObject } from "../utils/createResponseObject";

interface ControllerError {
  res: Response;
  error: unknown;
  defaultErrorMessage: string;
}

/**
 * Handles errors that occur during the execution of a controller.
 * @param {Object} props - Error handling properties.
 * @param {string} props.defaultErrorMessage - The default error message to return if the error is not an instance of HttpError.
 * @param {Response} props.res - The Express Response object.
 * @param {unknown} props.error - The error that occurred during the execution of the controller.
 * @returns {Response} - The error response to send to the client.
 */
export const handleControllerError = ({ defaultErrorMessage, res, error }: ControllerError): Response => {
  try {
    if (error instanceof HttpError) {
      return res.status(error.statusCode || 500).json(createResponseObject({ error: { message: error.message, details: error.details } }));
    } else if (error instanceof AxiosError) {
      return res.status(error.response?.status || 500).json(
        createResponseObject({
          error: {
            message: error.response?.data?.error.message || "Error communicating with microservice",
            details: error.response?.data?.error.details || error.message,
          },
        })
      );
    }

    // Handle unknown errors
    return res.status(500).json(createResponseObject({ error: { message: defaultErrorMessage, details: "Internal server error" } }));
  } catch (err) {
    return res.status(500).json(createResponseObject({ error: { message: defaultErrorMessage, details: "Internal server error" } }));
  }
};
