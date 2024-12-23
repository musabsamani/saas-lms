import dotenv from "dotenv";

dotenv.config();

export const SERVICES_NAME = {
  baseUrl: "BASE_URL",
  apiGateway: "API_GATEWAY",
  tenantAndOrganizationManagementService: "TENANT_AND_ORGANIZATION_MANAGEMENT_SERVICE",
  identityAndAccessManagementService: "IDENTITY_AND_ACCESS_MANAGEMENT_SERVICE",
  communicationAndNotificationService: "COMMUNICATION_AND_NOTIFICATION_SERVICE",
  learningAndAssessmentManagementService: "LEARNING_AND_ASSESSMENT_MANAGEMENT_SERVICE",
} as const;

// Generate an object with service names as keys and their URLs as values
export const apiUrls = Object.fromEntries(
  Object.entries(SERVICES_NAME).map(([key, value]) =>
    key === "baseUrl"
      ? [key, `${process.env[SERVICES_NAME.baseUrl]}:${process.env[SERVICES_NAME.apiGateway + "_PORT"]}`]
      : [key, `${process.env[SERVICES_NAME.baseUrl]}:${process.env[value + "_PORT"]}`]
  )
);
