import dotenv from "dotenv";
import { PrismaClient, Division } from "@prisma/client";
import { HttpError } from "../errors/httpError";
import { handleDatabaseError } from "../utils/handleDatabaseErrors";
import { createDivisionData, updateDivisionDTO, divisionResponseDTO, divisionExtendedResponseDTO } from "../interfaces/divisions";

// Load environment variables from .env file
dotenv.config();

// Instantiate Prisma Client
const prisma = new PrismaClient();

/**
 * Interface to check if tenant exists
 *
 * @interface checkIfTenantExistsInterface
 * @property {number} id - The ID of the tenant to check
 * @property {object} [errorOptions] - The error object to throw if the tenant does not exist
 * @property {string} [errorOptions.message] - The error message to throw
 * @property {number} [errorOptions.statusCode] - The HTTP status code to throw
 */
interface checkIfTenantExistsInterface {
  id: number;
  errorOptions?: {
    message?: string;
    statusCode?: number;
  };
}

/**
 * Converts a flat list of divisions into a nested hierarchical structure
 *
 * The function takes a list of `divisionExtendedResponseDTO` objects and converts it into a nested structure
 * where each division's children array is populated with its direct children. The function returns an array
 * of top-level divisions which parentId is null, and it will include all nested children.
 *
 * @param divisions - The list of divisionExtendedResponseDTO objects to convert
 * @returns The nested hierarchical structure of divisions
 * @throws HttpError If a division's parent is not found in the list
 */
const divisionListToHierarchy = (originalDivisions: divisionResponseDTO[]): divisionExtendedResponseDTO[] => {
  if (!originalDivisions) return [];
  const divisions = [...originalDivisions];

  // Convert the flat list of divisions into a nested structure
  const divisionMap: { [key: number]: divisionExtendedResponseDTO } = {};

  // Step an array of top-level divisions which parentId is null, and it will include all nested children
  const rootDivisions: divisionExtendedResponseDTO[] = [];

  // Step 1: Create a map of divisions
  divisions.forEach((division: divisionResponseDTO) => {
    // add the division to the map with its ID as the key
    divisionMap[division.id] = division as divisionExtendedResponseDTO;
    // and initialize its children array
    divisionMap[division.id].children = [];
  });

  // Step 2: Build the tree structure
  divisions.forEach((division: divisionResponseDTO) => {
    const extendedDivision = division as divisionExtendedResponseDTO;
    if (division.parentId === null) {
      // If the division is a root (no parent), add it to the root list
      rootDivisions.push(extendedDivision);
    } else {
      // Otherwise, find the parent in the map and add this division to its children
      const parent = divisionMap[division.parentId];
      if (parent) {
        parent.children.push(extendedDivision);
      }
    }
  });

  // Step 3: Return the root divisions (this will now include all nested children)
  return rootDivisions;
};

export class DivisionService {
  /**
   * Retrieves all divisions stored in the database
   * @returns List all divisions if found, otherwise throws an error
   * */
  public async getAllDivision(): Promise<divisionResponseDTO[] | never> {
    try {
      const divisions = await prisma.division.findMany({});
      return divisions;
    } catch (error) {
      handleDatabaseError("Could not retrieve divisions", error);
    }
  }

  /**
   * Retrieves tenant's division hierarchy as a nested structure of divisions
   * @param {number} tenantId The ID of the tenant to retrieve its hierarchy
   * @returns {Promise<divisionExtendedResponseDTO[] | never>} The division's hierarchy if found, otherwise throws an error
   */
  public async getTenantDivisionHierarchy(tenantId: number): Promise<divisionResponseDTO[] | never> {
    // Retrieve the tenant's divisions as a list
    const divisions = await this.getTenantDivisionList(tenantId);

    // Convert the flat list of divisions into a nested structure
    return divisionListToHierarchy(divisions);
  }

  /**
   * Retrieves tenant's all subdivision as a list
   * @param tenantId The ID of the specified tenant
   * @returns The tenant's subdivisions if found, otherwise throws an error
   */
  public async getTenantDivisionList(tenantId: number): Promise<divisionResponseDTO[] | never> {
    try {
      // check if tenant exists
      await this.checkIfTenantExists({ id: tenantId });

      // Retrieve all divisions related to the tenant
      const divisions = await prisma.division.findMany({ where: { tenantId } });

      // check if divisions exist
      if (!divisions) throw new HttpError({ message: "Divisions not found", statusCode: 404 });

      return divisions;
    } catch (error) {
      handleDatabaseError("Could not retrieve divisions", error);
    }
  }

  /**
   * Retrieves a single division by its ID
   * @param divisionId The ID of the division to retrieve
   * @returns The division if found, otherwise throws a 404 error
   */
  public async getDivisionById({ divisionId, tenantId }: { tenantId: number; divisionId: number }): Promise<divisionResponseDTO | never> {
    try {
      // check if tenant exists
      await this.checkIfTenantExists({ id: tenantId });

      const division = await this.checkIfDivisionExists({ divisionId, tenantId });

      return division;
    } catch (error) {
      handleDatabaseError("Could not retrieve division", error);
    }
  }

  /**
   * Creates a new division in the database
   * @param data The data to create a new division
   * @returns The created division if successful, otherwise throws an error
   */
  public async createDivision(data: createDivisionData): Promise<divisionResponseDTO | never> {
    try {
      // check if tenant exists
      await this.checkIfTenantExists({
        id: data.tenantId,
        errorOptions: {
          message: `Invalid data: Tenant with id: ${data.tenantId} not found`,
          statusCode: 400,
        },
      });

      // initialize parent division variable
      let parentDivision: divisionResponseDTO | null = null;

      // get parent division
      if (data.parentId) parentDivision = await prisma.division.findUnique({ where: { tenantId: data.tenantId, id: data.parentId } });

      // check if parent division exists
      if (!parentDivision) throw new HttpError({ message: `Foreign key constraint failed: Parent division not found with id: ${data.parentId} and tenantId: ${data.tenantId}`, statusCode: 400 });

      return await prisma.division.create({ data });
    } catch (error) {
      handleDatabaseError("Could not create division", error);
    }
  }

  /**
   * Updates a division's details in the database
   * @param divisionId The ID of the division to update
   * @param data The new data to update the division with
   * @returns The updated division if successful, otherwise throws an error
   */
  public async updateDivision(data: updateDivisionDTO): Promise<divisionResponseDTO | never> {
    try {
      // check if tenant exists
      await this.checkIfTenantExists({ id: data.tenantId });

      // Check if the record does not exists
      const existingDivision = await prisma.division.findUnique({ where: { id: data.id, tenantId: data.tenantId } });
      if (!existingDivision) {
        throw new HttpError({ message: `Division with id: ${data.id} and Tenant id: ${data.tenantId} not found`, statusCode: 404 });
      }

      // Check if the record has not been modified by another process
      if (existingDivision.version !== data.version) {
        throw new HttpError({ message: "Version conflict: The record has been modified by another process", statusCode: 409 });
      }

      const updatedDivision = await prisma.division.update({
        where: { id: data.id, tenantId: data.tenantId },
        data: {
          ...data,
          // Increment the version on successful update
          version: { increment: 1 },
        },
      });

      return updatedDivision;
    } catch (error) {
      handleDatabaseError("Could not update division", error);
    }
  }

  /**
   * Deletes a division from the database
   * @param divisionId The ID of the division to delete
   * @returns The deleted division if successful, otherwise throws an error
   */
  public async deleteDivision({ tenantId, divisionId }: { tenantId: number; divisionId: number }): Promise<Division | never> {
    try {
      // check if tenant exists
      await this.checkIfTenantExists({ id: tenantId });

      const deletedDivision = await prisma.division.delete({ where: { id: divisionId, tenantId } });

      // Check if the record does not exists
      if (!deletedDivision) throw new HttpError({ message: `Division with id: ${divisionId} and Tenant id: ${tenantId} not found`, statusCode: 404 });

      // return deleted division
      return deletedDivision;
    } catch (error) {
      handleDatabaseError("Could not delete division", error);
    }
  }

  /**
   * Checks if a tenant with the given ID exists in the database
   * @param id The ID of the tenant to check
   * @throws {HttpError} If the tenant does not exist, with a 404 status code
   */

  private async checkIfTenantExists({ id, errorOptions }: checkIfTenantExistsInterface) {
    // Retrieve the tenant
    const tenant = await prisma.tenant.findUnique({ where: { id } });

    // check if tenant exists
    if (!tenant)
      throw new HttpError({
        message: errorOptions?.message || `Tenant with the id: ${id} not found`,
        statusCode: errorOptions?.statusCode || 404,
      });
  }

  private async checkIfDivisionExists({ divisionId, tenantId }: { divisionId: number; tenantId: number }) {
    // Retrieve the division
    const division = await prisma.division.findUnique({ where: { id: divisionId, tenantId } });

    // check if division exists
    if (!division) throw new HttpError({ message: `Division with id: ${divisionId} and Tenant id: ${tenantId} not found`, statusCode: 404 });

    return division;
  }
}
