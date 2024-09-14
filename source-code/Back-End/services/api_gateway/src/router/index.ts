import { Request, Response, Router } from "express";
import { forwardRequest } from "../controllers";

export const router = Router();

/**
 * Interface to represent service endpoints.
 * @property {string} serviceEndpoint - The API route to forward requests for a specific service.
 * @property {string} serviceUrl - The name of the service, typically the environment variable containing the service URL.
 */
interface ServiceEndpointConfig {
  serviceEndpoint: string;
  serviceUrl: string;
}

/**
 * Array of service endpoints and corresponding service names (service URLs).
 * These routes will forward requests to their respective microservices.
 */
const serviceEndpoints: ServiceEndpointConfig[] = [
  { serviceEndpoint: "/tenants", serviceUrl: process.env.TENANT_SERVICE_URL! },
  { serviceEndpoint: "/users", serviceUrl: process.env.USER_SERVICE_URL! },
  { serviceEndpoint: "/auth", serviceUrl: process.env.AUTHENTICATION_SERVICE_URL! },
];

/**
 * Maps through the `serviceEndpoints` array and creates routes for each service.
 * - Forwards requests from `/serviceEndpoint` to the respective microservice.
 * - Forwards requests from `/serviceEndpoint/*` (sub-paths) to the respective microservice.
 *
 * @param {string} serviceEndpoint - The API endpoint (e.g., "/tenants", "/users").
 * @param {string} serviceUrl - The name of the microservice (e.g., "TENANT_SERVICE_URL",
 * because "TENANT_SERVICE_URL" is the URL of the tenant service from the .env file).
 */

/**
 * Default route to check if the API Gateway is running.
 * Responds with a "Hello World!" message and a simple status.
 */
router.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World!", details: "API_Gateway is up and running" });
});

serviceEndpoints.forEach(({ serviceEndpoint, serviceUrl }) => {
  // Forward all requests to the root of each service endpoint
  router.all(serviceEndpoint, forwardRequest({ removedPath: serviceEndpoint, serviceUrl }));

  // Forward all requests to sub-paths under each service endpoint
  router.all(`${serviceEndpoint}/*`, forwardRequest({ removedPath: `${serviceEndpoint}/`, serviceUrl }));
});
