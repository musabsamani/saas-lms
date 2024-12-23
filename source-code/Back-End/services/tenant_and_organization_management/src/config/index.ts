import dotenv from "dotenv";

dotenv.config();

const baseUrl = process.env.BASE_API_URL;

export const apiUrls = {
  baseUrl,
  apiGateway: `${baseUrl}:${process.env.API_GATEWAY_PORT}`,
  tenantAndOrganizationManagementService: `${baseUrl}:${process.env.TENANT_AND_ORGANIZATION_MANAGEMENT_SERVICE_PORT}`,
  identityAndAccessManagementService: `${baseUrl}:${process.env.IDENTITY_AND_ACCESS_MANAGEMENT_SERVICE_PORT}`,
  communicationAndNotificationService: `${baseUrl}:${process.env.COMMUNICATION_AND_NOTIFICATION_SERVICE_PORT}`,
  learningAndAssessmentManagementService: `${baseUrl}:${process.env.LEARNING_AND_ASSESSMENT_MANAGEMENT_SERVICE_PORT}`,
};
