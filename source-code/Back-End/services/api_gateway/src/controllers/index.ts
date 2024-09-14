import axios, { AxiosError } from "axios";
import { Request, Response } from "express";

/**
 * Middleware function to forward incoming requests to a microservice.
 * This middleware strips the defined path segment (`removedPath`) from the request URL,
 * then forwards the request to the corresponding microservice defined by the `serviceUrl`.
 * @param {object} props - An object containing the properties `removedPath` and `serviceUrl`.
 * @param {string} props.removedPath - The path segment to be removed from the original request URL.
 * @param {string} props.serviceUrl - The name of the environment variable holding the microservice's base URL (e.g., "http://localhost:5001").
 * @returns A function that forwards the request to the microservice and returns the response.
 */
export const forwardRequest = ({ removedPath, serviceUrl }: { removedPath: string; serviceUrl: string }) => {
  return async (req: Request, res: Response) => {
    // Check if the service URL is available in the environment
    if (!serviceUrl) {
      return res.status(500).json({
        message: `Service URL not found for ${serviceUrl}. Please check your environment configuration.`,
      });
    }

    try {
      const regex = new RegExp(`^${removedPath}`);
      const { method, body, params } = req;

      // Forward the request to the appropriate microservice
      const response = await axios({
        method,
        url: `${serviceUrl}/api/v1/${req.path.replace(regex, "")}`,
        data: body,
        params,
      });

      // Return the microservice's response
      return res.status(response.status).json(response.data);
    } catch (error) {
      // Handle Axios-specific errors
      if (error instanceof AxiosError) {
        return res.status(error.response?.status || 500).json(
          error.response?.data || {
            message: "Error forwarding request to microservice",
            details: error.message,
          }
        );
      }

      // Handle generic errors
      return res.status(500).json({
        message: "An unexpected error occurred while forwarding the request.",
        // error,
      });
    }
  };
};
