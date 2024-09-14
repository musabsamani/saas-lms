/*
  Warnings:

  - Added the required column `primaryContact` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionType` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "primaryContact" TEXT NOT NULL,
ADD COLUMN     "subscriptionType" TEXT NOT NULL;
