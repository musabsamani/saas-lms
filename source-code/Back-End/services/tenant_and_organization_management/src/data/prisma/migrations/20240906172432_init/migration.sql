/*
  Warnings:

  - Made the column `subscriptionEndDate` on table `Tenant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subscriptionStatus` on table `Tenant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `trialEndDate` on table `Tenant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subscriptionType` on table `Tenant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "subscriptionEndDate" SET NOT NULL,
ALTER COLUMN "subscriptionStatus" SET NOT NULL,
ALTER COLUMN "trialEndDate" SET NOT NULL,
ALTER COLUMN "subscriptionType" SET NOT NULL;
