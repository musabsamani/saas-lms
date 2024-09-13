import Joi from "joi";
import { subscriptionStatusArray, subscriptionTypesArray } from "../constants";

//! These Joi validation schemas in this file should be in sync with
//! the tenant DTOs and interfaces in file `/src/interfaces/index.ts`.

/**
 * Joi validation schema for optional fields of a tenant.
 *
 * This schema includes:
 * 1. Fields required by the database but optional for the controller, as they can be set by the controller.
 * 2. Optional fields for the tenant that are allowed to be null or undefined.
 *
 * - `name`: Optional string.
 * - `subscriptionType`: Optional string, must be one of the allowed subscription types.
 * - `subscriptionStatus`: Optional string, must be one of the allowed subscription statuses.
 * - `trialEndDate`: Optional date for when the trial ends.
 * - `subscriptionEndDate`: Optional date for when the subscription ends.
 * - `email`: Optional string, must be a valid email format.
 * - `phone`: Optional string, can be null.
 * - `address`: Optional string, can be null.
 * - `city`: Optional string, can be null.
 * - `state`: Optional string, can be null.
 * - `postalCode`: Optional string, can be null.
 * - `country`: Optional string, can be null.
 * - `website`: Optional string, must be a valid URI format, can be null.
 */
const tenantOptionalFields = {
  name: Joi.string().optional(),
  subscriptionType: Joi.string()
    .valid(...subscriptionTypesArray)
    .optional(),
  subscriptionStatus: Joi.string()
    .valid(...subscriptionStatusArray)
    .optional(),
  trialEndDate: Joi.date().optional(),
  subscriptionEndDate: Joi.date().optional(),

  // Optional tenant details
  email: Joi.string().email().optional().allow(null),
  phone: Joi.string().optional().allow(null),
  address: Joi.string().optional().allow(null),
  city: Joi.string().optional().allow(null),
  state: Joi.string().optional().allow(null),
  postalCode: Joi.string().optional().allow(null),
  country: Joi.string().optional().allow(null),
  website: Joi.string().uri().optional().allow(null),
};

/**
 * Joi validation schema for creating a tenant.
 *
 * This schema is used by the controller to validate the request body when creating a tenant.
 *
 * - `name`: Required string representing the tenant's name.
 * - Optional fields from `tenantOptionalFields` are included.
 */
export const createTenantSchema = Joi.object({
  ...tenantOptionalFields,
  name: Joi.string().required(),
});

/**
 * Joi validation schema for updating a tenant.
 *
 * This schema is used by the controller to validate the request body when updating a tenant.
 *
 * - `id`: Required number representing the unique ID of the tenant.
 * - `version`: Required number for optimistic locking, indicating the current version of the tenant.
 * - Optional fields from `tenantOptionalFields` are included.
 */
export const updateTenantSchema = Joi.object({
  ...tenantOptionalFields,
  id: Joi.number().required(),
  version: Joi.number().required(),
});
