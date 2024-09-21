import { HealthCheckResponse } from "../interfaces";
import Joi from "joi";

/**
 * @interface deleteResponse
 * @description Represents a response object for a delete operation.
 *
 * @template T - The type of the data being deleted (e.g. Tenant, Division, User, Course, etc.).
 * @property {string} message - A message indicating the result of the delete operation typically a message indicating that the resource was deleted successfully.
 * @property {T} data - The data related to the deleted resource.
 */
interface deleteResponse<T> {
  message: string;
  data: T;
}

/**
 * @interface responseObjectInterface
 * @description A generic interface for a standard API response object, which can include data and error information.
 *
 * @template T - The type of the data being returned.
 * @property {T | T[] | deleteResponse<T>} [data] - The main data of the response. It can be a single object, an array of objects, or a delete response object.
 * @property {object} [error] - An object containing error details if the operation failed.
 * @property {string} [error.message] - An error message describing what went wrong.
 * @property {string | Joi.ValidationErrorItem[]} [error.details] - Additional details about the error, which can be a simple string or an array of validation errors (e.g., from Joi validation).
 */
export interface responseObjectInterface<T> {
  data?: T | T[] | deleteResponse<T> | HealthCheckResponse | null;
  error?: { message?: string; details?: string | string[] | Joi.ValidationErrorItem[] } | null;
}

/**
 * Creates a standardized response object from the given data and error objects.
 *
 * This utility function is used to create a standard API response object that
 * includes data and/or error information. The response object is typed as
 * `responseObjectInterface<T>`, which means it can include data of type `T` and
 * an error object with a `message` and `details` property.
 *
 * @param {responseObjectInterface<T>} options - An object containing `data` and/or `error` properties.
 * @returns {responseObjectInterface<T>} - A standardized response object with `data` and/or `error` properties.
 */
export const createResponseObject = <T>({ data, error }: responseObjectInterface<T>): responseObjectInterface<T> => {
  return { data,error };
};
