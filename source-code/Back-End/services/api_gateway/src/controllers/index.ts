import axios, { AxiosError } from "axios";
import { Request, Response } from "express";
import { checkServiceHealth } from "../utils/checkServiceHealth";
import { handleControllerError } from "../utils/handleContollerErrors";
import { createResponseObject } from "../utils/createResponseObject";
import { customRequest } from "../interfaces";

/**
 * Middleware function to forward incoming requests to corresponding microservice
 * @param {string} serviceUrl - The base URL of the target microservice
 * @returns A function that forwards the request to the microservice and returns the response.
 */
export const forwardRequest = (serviceUrl: string) => {
  return async (req: customRequest, res: Response) => {
    // Check if the service URL is available in the environment
    if (!serviceUrl) {
      return res.status(500).json(
        createResponseObject({
          error: {
            message: `Service URL not found for endpoint: \`${req.path}\`. Please check your environment or the configuration file`,
          },
        })
      );
    }

    try {
      const { method, body, query } = req;

      // Check if the service is available, it throws an error if the service is not available
      await checkServiceHealth(serviceUrl);

      // Remove problematic headers that can cause issues when forwarding the request
      const headers = {
        ...req.headers,
      };
      // to remove headers that can cause issues when forwarding the request
      delete headers["host"];
      delete headers["content-length"];

      // console.log({ method, url: serviceUrl + "/api/v1" + req.path, data: body, params, headers });
      // Forward the request to the appropriate microservice
      const response = await axios({
        method,
        url: serviceUrl + "/api/v1" + req.path,
        data: body,
        params: query,
        withCredentials: true, // Enable cookies
        headers,
      });

      // Set cookies if any are received
      if (response.headers["set-cookie"]) {
        res.setHeader("Set-Cookie", response.headers["set-cookie"]);
      }

      // Set authorization header if any is received
      if (response.headers["authorization"]) {
        res.setHeader("Authorization", response.headers["authorization"]);
      }
      // Return the microservice's response
      return res.status(response.status).json(createResponseObject({ data: response.data?.data, error: response.data?.error }));
    } catch (error) {
      return handleControllerError({ defaultErrorMessage: "Error forwarding request to microservice", res, error });
    }
  };
};
