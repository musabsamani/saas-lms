import { PrismaClient } from "@prisma/client";
import winston from "winston";

const prisma = new PrismaClient();

export const database = async () => {
  async function main() {
    winston.info(`Connected to PostgreSQL on ${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT} ...`);
  }
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
    });
};
