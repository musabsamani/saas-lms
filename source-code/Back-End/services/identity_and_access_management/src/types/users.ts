import { User } from "@prisma/client";

/**
 * Union type representing fields used for auditing  purposes
 */
export type auditingFields = "createdAt" | "updatedAt";

/**
 * Union type representing subscription-related fields from `User`
 */
export type subscriptionFieldsUnion = "subscriptionType" | "subscriptionStatus" | "trialEndDate" | "subscriptionEndDate";

/**
 * Object type representing only subscription-related fields from `User` and mark them as optional
 */
export type subscriptionFieldsOptional = {
  [P in subscriptionFieldsUnion]?: User[P];
};
