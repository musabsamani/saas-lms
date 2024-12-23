import { Router } from "express";
import dotenv from "dotenv";
import { forwardRequest } from "../controllers";
import { apiUrls } from "../config";

dotenv.config();

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
 * which are a collection of endpoints and the URL of their corresponding service.
 */
const services: ServiceEndpointConfig[] = [
  {
    endpoints: ["/tenants", "/subscriptions", "/divisions"],
    serviceUrl: apiUrls.tenantAndOrganizationManagementService!,
  },
  {
    endpoints: ["/auth", "/roles", "/users"],
    serviceUrl: apiUrls.identityAndAccessManagementService!,
  },
  {
    endpoints: ["/notifications", "/chat"],
    serviceUrl: apiUrls.communicationAndNotificationService!,
  },
  {
    endpoints: ["/content", "/quiz", "/progress", "/enrollments"],
    serviceUrl: apiUrls.learningAndAssessmentManagementService!,
  },
];

/**
 * @function routeToServices - Routes the API Gateway to the services
 * @param {ServiceEndpointConfig[]} services - The services to route to
 */
services.forEach(({ endpoints, serviceUrl }) => {
  endpoints.forEach((endpoint) => {
    // Define a route for each endpoint with the exact root path eg: `/api/v1/users`
    router.all(endpoint, forwardRequest(serviceUrl));
    // Define a route for each endpoint with sub-paths eg: `/api/v1/users/:id`
    router.all(endpoint + "/*", forwardRequest(serviceUrl));
  });
});
