import { User } from "@prisma/client";
import { makeNullFieldsOptional } from "../utils/typesUtilities";
import { auditingFields, subscriptionFieldsOptional, subscriptionFieldsUnion } from "../types/users";
import { divisionResponseDTO } from "./divisions";

//! When updating this file, and these interfaces
//! make sure validation schemas in `validations/userValidationSchemas.ts` are updated

/**
 * Base interface for the User entity.
 *
 * This interface extends the User model, making all nullable fields optional while preserving required fields.
 *
 * It is used as a base interface for various user-related operations.
 */
export interface userBaseModel extends makeNullFieldsOptional<User> {}

/**
 * Interface representing the user structure used for database operations.
 *
 * This interface extends the `userBaseModel` interface but excludes auditing fields such as `createdAt`, `updatedAt`.
 *
 * It is typically used for creating or updating user data where the auditing fields are handled by the system automatically.
 */
export interface userDataWithoutAudit extends Omit<userBaseModel, auditingFields> {}

// /**
//  * Interface representing the structure of user data retrieved from the database.
//  *
//  * This interface extends `User` and is typically used to hold user data from the database.
//  */
// export interface userGetFromDatabaseDTO extends Omit<User, "password"> {}

/**
 * Interface representing the response structure for returning user data via the API.
 *
 * This omits the password field from the data retrieved from the database.
 */
export interface userResponseDTO extends Omit<User, "password" | "refreshToken"> {}

/**
 * Interface for creating a user
 *
 * This interface is used to define the shape of the data passed to the controller for creating a new user.
 *
 * It excludes fields such as `id`, `version`, and auditing fields (`createdAt`, `updatedAt`) as they are auto-generated.
 */
export interface createUserDTO extends Omit<userDataWithoutAudit, "id" | "version"> {}

/**
 * Interface for updating a user used by the database service and controllers.
 *
 * This interface is used to define the shape of the data passed when updating an existing user.
 * It extends `userBaseModel` but marks all fields as optional except `id` and `version` fields as required.
 */
export interface updateUserDTO extends Partial<userDataWithoutAudit> {
  id: number;
  updatedAt: Date;
}
