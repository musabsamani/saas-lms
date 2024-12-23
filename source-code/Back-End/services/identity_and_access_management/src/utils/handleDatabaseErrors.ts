import { Prisma } from "@prisma/client";
import { HttpError } from "../errors/httpError";

/**
 * Handles errors that occur during database operations
 * @param {string} message A generic error message that describes the operation that failed
 * @param {unknown} error The error object that was thrown by the database operation
 * @returns {never} This function will always throw an HttpError
 * @throws {HttpError} The error that occurred during the database operation, converted to an HttpError with a suitable HTTP status code and error message
 */
export function handleDatabaseError(message: string, error: unknown): never {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error?.code) {
      case "P2025":
        const entity = (error.meta && (error.meta?.modelName as string)) || "unknown field";
        // const cause = (error.meta && (error.meta?.cause as string)) || "Please ensure the resource exists.";
        // Record not found error
        throw new HttpError({
          stack: error.stack,
          code: error?.code,
          details: error.message,
          message: `Record not found for the entity: ${entity}`,
          // message: `Record not found for the entity: ${entity}.\n Cause: ${cause}`,
          statusCode: 404,
        });

      case "P2002":
        // Unique constraint violation

        let uniqueFields = error.meta && error.meta.target && Array.isArray(error.meta.target) ? error.meta.target : [];
        uniqueFields = uniqueFields.filter((field) => field !== "tenantId");
        throw new HttpError({
          stack: error.stack,
          code: error?.code,
          details: error.message,
          message: `Unique constraint failed on fields: ${uniqueFields}`,
          statusCode: 400,
        });

      case "P2003":
        // Foreign key constraint violation
        const foreignKeyFields = error.meta && (error.meta?.field_name as string[]);
        throw new HttpError({
          stack: error.stack,
          code: error?.code,
          details: error.message,
          message: `Foreign key constraint failed on fields: ${foreignKeyFields}`,
          statusCode: 400,
        });

      case "P2016":
        const queryFields = (error.meta && (error.meta?.field_name as string[])) || [];
        // Query engine error - related to unexpected data
        throw new HttpError({
          stack: error.stack,
          code: error?.code,
          details: error.message,
          message: `Query returned unexpected data. Affected fields: ${queryFields}`,
          statusCode: 500,
        });

      case "P2017":
        const relationField = (error.meta && (error.meta?.field_name as string)) || "unknown relation field";
        // Record does not exist at all (in relation fields)
        throw new HttpError({
          stack: error.stack,
          code: error?.code,
          message: `Relation violation. A related record was not found in the expected relation field: ${relationField}. Please check your relations or referenced fields.`,
          details: error.message,
          statusCode: 400,
        });

      case "P2018":
        const missingRelationFields = (error.meta && (error.meta?.field_name as string[])) || [];
        // Required relation missing
        throw new HttpError({
          stack: error.stack,
          code: error?.code,
          details: error.message,
          message: `Required relation missing in the provided data. Affected fields: ${missingRelationFields}`,
          statusCode: 400,
        });

      case "P2022":
        const missingColumn = (error.meta && (error.meta?.column_name as string)) || "unknown column";
        // Column not found in database
        throw new HttpError({
          stack: error.stack,
          code: error?.code,
          details: error.message,
          message: `Column not found in the database: ${missingColumn}. Please check your schema.`,
          statusCode: 500,
        });

      default:
        // Generic Prisma error handler for known request errors
        throw new HttpError({
          stack: error.stack,
          code: error?.code,
          details: error.message,
          message: `Database error occurred`,
          statusCode: 500,
        });
    }
  }

  // Handle validation errors (e.g., malformed data, invalid inputs)
  if (error instanceof Prisma.PrismaClientValidationError) {
    throw new HttpError({
      stack: error.stack,
      code: error.name,
      details: error.message,
      message: "Invalid data provided. Please review the data format and types.",
      statusCode: 400,
    });
  }

  // Handle database connection or initialization errors
  if (error instanceof Prisma.PrismaClientInitializationError) {
    throw new HttpError({
      stack: error.stack,
      code: error.name,
      details: error.message,
      message: "Database connection or initialization failed. Please check your database connection settings.",
      statusCode: 500,
    });
  }

  // Handle Prisma query engine errors (e.g., incorrect query structure)
  if (error instanceof Prisma.PrismaClientRustPanicError) {
    throw new HttpError({
      stack: error.stack,
      code: error.name,
      details: error.message,
      message: "A query engine error occurred. Please review your query syntax and structure.",
      statusCode: 500,
    });
  }

  // Handle general HttpError instances
  if (error instanceof HttpError) {
    throw new HttpError({
      stack: error.stack,
      message: error.message,
      details: error.details,
      statusCode: error.statusCode,
    });
  }

  // Default error handling for unknown errors
  throw new HttpError({
    message,
    statusCode: 500,
  });
}
