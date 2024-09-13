// Enums representing subscription type
enum subscriptionTypeEnum {
  "FREE" = "FREE",
  "BASIC" = "BASIC",
  "PREMIUM" = "PREMIUM",
  "ENTERPRISE" = "ENTERPRISE",
}

// Enums representing subscription status
enum subscriptionStatusEnum {
  "TRIAL" = "TRIAL",
  "ACTIVE" = "ACTIVE",
  "INACTIVE" = "INACTIVE",
  "SUSPENDED" = "SUSPENDED",
  "CANCELLED" = "CANCELLED",
}

/**
 * Returns an array of subscription types.
 *
 * This function converts the `subscriptionTypeEnum` to an array of its values.
 *
 * @returns {string[]} An array of subscription types (e.g., "FREE", "BASIC", "PREMIUM").
 */
export const subscriptionTypesArray = Object.values(subscriptionTypeEnum);

/**
 * Returns an array of subscription statuses.
 *
 * This function converts the `subscriptionStatusEnum` to an array of its values.
 *
 * @returns {string[]} An array of subscription statuses (e.g., "TRIAL", "ACTIVE", "INACTIVE").
 */
export const subscriptionStatusArray = Object.values(subscriptionStatusEnum);
