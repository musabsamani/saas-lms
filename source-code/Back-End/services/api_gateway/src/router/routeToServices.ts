import { Router } from "express";
import { forwardRequest } from "../controllers";

/**
 * @constant {Router} router - The main router for the API Gateway. Routes requests to different microservices
 */
export const router: Router = Router();

/**
 * @interface {ServiceEndpointConfig} - The configuration for a service endpoint
 * @property {string[]} endpoints - The endpoints for the service
 * @property {string} serviceUrl - The URL of the service
 */
interface ServiceEndpointConfig {
  readonly endpoints: string[];
  readonly serviceUrl: string;
}

/**
 * @constant {ServiceEndpointConfig[]} services - The list of services that the API Gateway routes to.
 */
const services: ServiceEndpointConfig[] = [
  {
    endpoints: ["/tenants", "/subscriptions", "/divisions"],
    serviceUrl: process.env.TENANT_AND_ORGANIZATION_MANAGEMENT_SERVICE_URL!,
  },
  {
    endpoints: ["/auth", "/roles", "/users"],
    serviceUrl: process.env.IDENTITY_AND_ACCESS_MANAGEMENT_SERVICE_URL!,
  },
  {
    endpoints: ["/notifications", "/chat"],
    serviceUrl: process.env.COMMUNICATION_AND_NOTIFICATION_SERVICE_URL!,
  },
  {
    endpoints: ["/content", "/quiz", "/progress", "/enrollments"],
    serviceUrl: process.env.LEARNING_AND_ASSESSMENT_MANAGEMENT_SERVICE_URL!,
  },
];

/**
 * @function routeToServices - Routes the API Gateway to the services
 * @param {ServiceEndpointConfig[]} services - The services to route to
 */
services.forEach(({ endpoints, serviceUrl }) => {
  endpoints.forEach((endpoint) => {
    router.all(endpoint, forwardRequest(serviceUrl));
    router.all(endpoint + "/*", forwardRequest(serviceUrl));
  });
});
