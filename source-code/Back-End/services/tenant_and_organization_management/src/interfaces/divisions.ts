import { Division } from "@prisma/client";
import { makeNullFieldsOptional } from "../utils/typesUtilities";
import { auditingFields } from "../types";

//! When updating this file, and these interfaces
//! make sure validation schemas in `validations/divisionValidationSchemas.ts` are updated

/**
 * Base interface for the Division entity.
 *
 * This interface extends the Division model, making all nullable fields optional while preserving required fields.
 *
 * It is used as a base interface for various division-related operations.
 */
export interface divisionBaseModel extends makeNullFieldsOptional<Division> {}

/**
 * Interface representing the division structure used for database operations.
 *
 * This interface extends the `divisionBaseModel` interface but excludes auditing fields such as `createdAt`, `updatedAt`.
 *
 * It is typically used for creating or updating division data where the auditing fields are handled by the system automatically.
 */
export interface divisionDataWithoutAudit extends Omit<divisionBaseModel, auditingFields> {}

/**
 * Interface representing the response structure for retrieving a division.
 *
 * This interface extends `Division` and is typically used in the API responses to return division data.
 */
export interface divisionResponseDTO extends Division {}

/**
 * Interface representing the response structure for retrieving a division.
 *
 * This interface extends `Division` and is typically used in the API responses to return division data.
 *
 * It includes an optional `children` field which is used to return the division's children if requested.
 */
export interface divisionExtendedResponseDTO extends Division {
  children: divisionExtendedResponseDTO[];
}

/**
 * Interface for creating a division used by the database service.
 *
 * This interface is used to define the shape of the data passed to the database service for creating a new division.
 *
 * It excludes fields such as `id`, `version`, and auditing fields (`createdAt`, `updatedAt`) as they are auto-generated.
 */
export interface createDivisionData extends Omit<divisionDataWithoutAudit, "id" | "version"> {}

/**
 * Interface for creating a division used by the backend controller for the request body.
 *
 * This interface is used to define the structure of the request body passed to the controller for creating a new division.
 * It extends `createDivisionData` but marks subscription-related fields in `subscriptionFieldsUnion` as optional.
 */
export interface createDivisionRequestDTO extends createDivisionData {}

/**
 * Interface for updating a division used by the database service and controllers.
 *
 * This interface is used to define the shape of the data passed when updating an existing division.
 * It extends `divisionBaseModel` but marks all fields as optional except `id` and `version` fields as required.
 */
export interface updateDivisionDTO extends Partial<divisionDataWithoutAudit> {
  id: number;
  updatedAt: Date;
  tenantId: number;
}
