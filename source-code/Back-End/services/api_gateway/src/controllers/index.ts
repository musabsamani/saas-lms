import axios, { AxiosError } from "axios";
import { Request, Response } from "express";

/**
 * Middleware function to forward incoming requests to corresponding microservice
 * @param {string} serviceUrl - The base URL of the target microservice
 * @returns A function that forwards the request to the microservice and returns the response.
 */
export const forwardRequest = (serviceUrl: string) => {
  return async (req: Request, res: Response) => {
    // Check if the service URL is available in the environment
    if (!serviceUrl) {
      return res.status(500).json({
        message: `Service URL not found for endpoint: \`${req.path}\`. Please check your environment configuration.`,
      });
    }

    try {
      const { method, body, params } = req;

      // Forward the request to the appropriate microservice
      const response = await axios({
        method,
        url: serviceUrl + "/api/v1" + req.path,
        data: body,
        params,
      });

      // Return the microservice's response
      return res.status(response.status).json(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        return res.status(axiosError.response.status || 500).json({ message: "Error forwarding request to microservice", details: axiosError.response.data });
      } else {
        return res.status(500).json({ message: "Error forwarding request to microservice", details: axiosError.message });
      }
    }
  };
};
