import { Request } from "express";

/**
 * @interface HealthCheckResponse
 * @description Represents the response object for the health check endpoint.
 *
 * @property {object} data - The main data of the response.
 * @property {string} data.message - A message indicating the result of the health check typically "Hello World!".
 * @property {string} data.details - Additional details about the health check result typically on which URL the service is running.
 */
export interface HealthCheckResponse {
  data: {
    message: "Hello World!";
    details: string;
  };
}

/**
 * Extends the Express Request interface to include a tenantId field.
 *
 * The tenantId field is used to store the tenant ID of the authenticated user.
 * It is set by the authentication middleware and is used to authorize requests
 * to the Division and Tenant controllers.
 *
 * @interface customRequest
 * @extends Request
 */
export interface customRequest extends Request {
  // The tenant ID of the authenticated user
  tenantId?: number;

  // The userRole of the authenticated user
  // roles include: user, SaaS Admin
  userRole?: "saasAdmin" | "user";
}
