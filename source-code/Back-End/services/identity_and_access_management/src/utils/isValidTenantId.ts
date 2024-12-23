import axios, { AxiosError } from "axios";
import { HttpError } from "../errors/httpError";
import { apiUrls } from "../config";

/**
 * Helper function to verify tenant existence
 *
 * Verifies if the tenant ID in the authentication token is valid and exists in the Tenant and Organization Management Service
 * @param tenantId The tenant ID to verify
 * @param token The authentication token to use for verification
 * @returns A Promise that resolves if the tenant exists, otherwise rejects with an HttpError
 * @throws HttpError if the tenant ID is invalid or the tenant does not exist
 */
export const isValidTenantId = async (tenantId: number, token: string, isSaasOwner?: boolean): Promise<void> => {
  if (!tenantId) {
    throw new HttpError({ message: `Missing tenant ID in the ${isSaasOwner ? "request body" : "authentication token"}`, statusCode: 401 });
  }

  if (isNaN(Number(tenantId))) {
    throw new HttpError({ message: `Invalid tenant ID in the ${isSaasOwner ? "request body" : "authentication token"}`, statusCode: 401 });
  }
  // const tenantBaseUrl = process.env.TENANT_AND_ORGANIZATION_MANAGEMENT_SERVICE_URL;
  const tenantBaseUrl = apiUrls.tenantAndOrganizationManagementService;

  if (!tenantBaseUrl) {
    throw new HttpError({ message: "TENANT_AND_ORGANIZATION_MANAGEMENT_SERVICE URL is missing", statusCode: 500 });
  }

  const url = `${tenantBaseUrl}/api/v1/tenants/${tenantId}`;
  try {
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!data) {
      throw new HttpError({ message: "Invalid tenant ID in the authentication token: Tenant not found", statusCode: 400 });
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new HttpError({ message: err.message, statusCode: 401 });
    }
    if (err instanceof HttpError) {
      throw new HttpError({ message: err.message, statusCode: 401 });
    }
    throw new HttpError({ message: "Error verifying tenant", statusCode: 401 });
  }
};
