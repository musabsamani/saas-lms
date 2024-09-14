import { Tenant } from "@prisma/client";
import { makeNullFieldsOptional } from "../utils/typesUtilities";
import { auditingFields, subscriptionFieldsOptional, subscriptionFieldsUnion } from "../types";

//! When updating this file, and these interfaces
//! make sure validation schemas in `validations/tenantValidationSchemas.ts` are updated

/**
 * Base interface for the Tenant entity.
 *
 * This interface extends the Tenant model, making all nullable fields optional while preserving required fields.
 *
 * It is used as a base interface for various tenant-related operations.
 */
export interface tenantBaseModel extends makeNullFieldsOptional<Tenant> {}

/**
 * Interface representing the tenant structure used for database operations.
 *
 * This interface extends the `tenantBaseModel` interface but excludes auditing fields such as `createdAt`, `updatedAt`.
 *
 * It is typically used for creating or updating tenant data where the auditing fields are handled by the system automatically.
 */
export interface tenantDataWithoutAudit extends Omit<tenantBaseModel, auditingFields> {}

/**
 * Interface representing the response structure for retrieving a tenant.
 *
 * This interface extends `Tenant` and is typically used in the API responses to return tenant data.
 */
export interface tenantResponseDTO extends Tenant {}

/**
 * Interface for creating a tenant used by the database service.
 *
 * This interface is used to define the shape of the data passed to the database service for creating a new tenant.
 *
 * It excludes fields such as `id`, `version`, and auditing fields (`createdAt`, `updatedAt`) as they are auto-generated.
 */
export interface createTenantData extends Omit<tenantDataWithoutAudit, "id" | "version"> {}

/**
 * Interface for creating a tenant used by the backend controller for the request body.
 *
 * This interface is used to define the structure of the request body passed to the controller for creating a new tenant.
 * It extends `createTenantData` but marks subscription-related fields in `subscriptionFieldsUnion` as optional.
 */
export interface createTenantRequestDTO extends Omit<createTenantData, subscriptionFieldsUnion>, subscriptionFieldsOptional {}

/**
 * Interface for updating a tenant used by the database service and controllers.
 *
 * This interface is used to define the shape of the data passed when updating an existing tenant.
 * It extends `tenantBaseModel` but marks all fields as optional except `id` and `version` fields as required.
 */
export interface updateTenantDTO extends Partial<tenantDataWithoutAudit> {
  id: number;
  version: number;
}
