import Joi from "joi";
import { subscriptionStatusArray, subscriptionTypesArray } from "../constants";

//! These Joi validation schemas in this file should be in sync with
//! the division DTOs and interfaces in file `/src/interfaces/index.ts`.

/**
 * Joi validation schema for optional fields of a division.
 */
const divisionBasicFields = {
  name: Joi.string().required(),
  tenantId: Joi.number().required(),
  parentId: Joi.number().optional().allow(null),
  description: Joi.string().optional().allow(null),
};

/**
 * Joi validation schema for creating a division.
 *
 * This schema is used by the controller to validate the request body when creating a division.
 */
export const createDivisionSchema = Joi.object({
  ...divisionBasicFields,
});

/**
 * Joi validation schema for updating a division.
 *
 * This schema is used by the controller to validate the request body when updating a division.
 */
export const updateDivisionSchema = Joi.object({
  ...divisionBasicFields,
  id: Joi.number().required(),
  updatedAt: Joi.date().required(),
});
