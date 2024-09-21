import { PrismaClient } from "@prisma/client";
import winston from "winston";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const prisma = new PrismaClient();

/**
 * Establishes a connection to the PostgreSQL database using Prisma.
 *
 * This function connects to the PostgreSQL database, logs the connection status,
 * and ensures that the Prisma client is disconnected after the main function execution.
 *
 * @async
 * @function database
 * @returns {Promise<void>} A promise that resolves when the database connection and disconnection are handled.
 */
export const database = async (): Promise<void> => {
  const main = async (): Promise<void> => {
    winston.info(`Connected to PostgreSQL on ${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT} ...`);
  };

  try {
    // Execute the main function
    await main();
  } catch (error) {
    // Log the error if an issue occurs
    winston.error("An error occurred while connecting to the database", error);
  } finally {
    // Ensure Prisma disconnects from the database
    await prisma.$disconnect();
  }
};
