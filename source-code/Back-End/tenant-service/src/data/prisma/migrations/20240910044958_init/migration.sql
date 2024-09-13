/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `Tenant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "isDeleted",
ALTER COLUMN "trialEndDate" DROP NOT NULL;
