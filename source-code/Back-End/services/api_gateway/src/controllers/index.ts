import axios, { AxiosError } from "axios";
import { Request, Response } from "express";
import { HttpError } from "../errors/httpError";
import { checkServiceHealth } from "../utils/checkServiceHealth";
import { handleControllerError } from "../utils/handleContollerErrors";
import { createResponseObject } from "../utils/createResponseObject";

/**
 * Middleware function to forward incoming requests to corresponding microservice
 * @param {string} serviceUrl - The base URL of the target microservice
 * @returns A function that forwards the request to the microservice and returns the response.
 */
export const forwardRequest = (serviceUrl: string) => {
  return async (req: Request, res: Response) => {
    // Check if the service URL is available in the environment
    if (!serviceUrl) {
      return res.status(500).json(
        createResponseObject({
          error: {
            message: `Service URL not found for endpoint: \`${req.path}\`. Please check your environment configuration.`,
          },
        })
      );
    }

    try {
      const { method, body, params } = req;

      // Check if the service is available, it throws an error if the service is not available
      await checkServiceHealth(serviceUrl);

      // Remove problematic headers that can cause issues when forwarding the request
      const headers = { ...req.headers };
      delete headers["host"];
      delete headers["content-length"];

      // Forward the request to the appropriate microservice
      const response = await axios({
        method,
        url: serviceUrl + "/api/v1" + req.path,
        data: body,
        params,
        headers,
      });

      // Return the microservice's response
      return res.status(response.status).json(createResponseObject({ data: response.data?.data, error: response.data?.error }));
    } catch (error) {
      return handleControllerError({ defaultErrorMessage: "Error forwarding request to microservice", res, error });
    }
  };
};
