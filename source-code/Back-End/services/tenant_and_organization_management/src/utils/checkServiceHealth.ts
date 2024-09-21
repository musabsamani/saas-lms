import axios, { AxiosError } from "axios";
import { HttpError } from "../errors/httpError";

/**
 * @description
 * Checks if the specified service is available and running by sending a GET request to the service's health endpoint.
 *
 * This function makes an HTTP GET request to the specified `serviceUrl` to test the availability
 * of the service's `/api/v1` endpoint. If the service is not running or unreachable, it throws an HttpError.
 *
 * @param {string} serviceUrl - The base URL of the service to check.
 * @returns {Promise<void>} A promise that resolves if the service is available, or rejects with an HttpError if not.
 * @throws {HttpError} If the service is not running or unreachable.
 */
export const checkServiceHealth = async (serviceUrl: string): Promise<void> => {
  try {
    await axios.get(`${serviceUrl}/api/v1`);
  } catch (err) {
    const error = err as AxiosError;
    const errorMessage = error.response?.status ? `Service responded with status code: ${error.response.status}` : `Service with the URL ${serviceUrl} is not reachable`;
    throw new HttpError({ message: errorMessage, statusCode: 500 });
  }
};
