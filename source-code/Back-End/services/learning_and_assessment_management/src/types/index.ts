import { Tenant } from "@prisma/client";

/**
 * Union type representing fields used for auditing  purposes
 */
export type auditingFields = "createdAt" | "updatedAt";

/**
 * Union type representing subscription-related fields from `Tenant`
 */
export type subscriptionFieldsUnion = "subscriptionType" | "subscriptionStatus" | "trialEndDate" | "subscriptionEndDate";

/**
 * Object type representing only subscription-related fields from `Tenant` and mark them as optional
 */
export type subscriptionFieldsOptional = {
  [P in subscriptionFieldsUnion]?: Tenant[P];
};
