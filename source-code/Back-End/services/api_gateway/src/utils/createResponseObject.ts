import Joi from "joi";

interface responseObjectInterface {
  data?: object[] | object;
  error?: { message?: string; details?: string | Joi.ValidationErrorItem[] };
}

/**
 * @description
 * Utility function to create a standardized response object for API responses.
 *
 * @param {responseObjectInterface} params - An object containing `data` and `error`.
 * @returns {object} A standardized response object.
 */
export const createResponseObject = ({ data, error }: responseObjectInterface): object => {
  return { data, error };
};
