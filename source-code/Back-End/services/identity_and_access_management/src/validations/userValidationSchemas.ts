import Joi from "joi";

// Define the required fields for creating a user
const userRequiredFields = {
  name: Joi.string().required(),
  tenantId: Joi.number().required(),
  email: Joi.string().email().required(),
  // Prohibits '@' in username
  username: Joi.string()
    .pattern(/^[^@]*$/)
    .required(),
  password: Joi.string().min(6).required(),
};

// Create optional fields for updating a user by making the required fields optional
const userOptionalFieldsForUpdate = Object.keys(userRequiredFields).reduce((acc, key) => {
  // Cast acc to the correct type: Record<string, Joi.Schema>
  acc[key as keyof typeof userRequiredFields] = userRequiredFields[key as keyof typeof userRequiredFields].optional();
  return acc;
}, {} as Record<keyof typeof userRequiredFields, Joi.Schema>);

// Define additional optional fields for both creating and updating a user
const additionalOptionalFields = {
  phone: Joi.string().optional().allow(null),
  address: Joi.string().optional().allow(null),
  sex: Joi.string().optional().allow(null),
  birthday: Joi.date().optional().allow(null),
  profileImageUrl: Joi.string().optional().allow(null),
};

/**
 * Joi validation schema for creating a user.
 *
 * This schema is used by the controller to validate the request body when creating a user.
 */
export const createUserSchema = Joi.object({
  ...userRequiredFields,
  ...additionalOptionalFields,
});

/**
 * Joi validation schema for updating a user.
 *
 * This schema is used by the controller to validate the request body when updating a user.
 */
export const updateUserSchema = Joi.object({
  ...userOptionalFieldsForUpdate,
  ...additionalOptionalFields,
  id: Joi.number().required(),
  updatedAt: Joi.date().required(),
});

/**
 * Joi validation schema for logging in a user.
 *
 * This schema is used by the controller to validate the request body when logging in a user.
 */
export const loginUserSchema = Joi.object({
  tenantId: userRequiredFields.tenantId,
  emailOrUsername: Joi.alternatives().try(userRequiredFields.email, userRequiredFields.username).required().label("Email or Username"),
  password: userRequiredFields.password,
});
