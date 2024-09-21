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
  /** The tenant ID of the authenticated user. */
  tenantId?: number;
}
