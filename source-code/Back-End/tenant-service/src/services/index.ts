import { Prisma, PrismaClient, Tenant } from "@prisma/client";
import { HttpError } from "../errors/httpError";
import { createTenantData, updateTenantDTO } from "../interfaces";
import { tenantResponseDTO } from "../interfaces";
import { handleDatabaseError } from "../utils/handleDatabaseErrors";

// Instantiate Prisma Client
const prisma = new PrismaClient();

export class TenantService {
  /**
   * Retrieves all tenants from the database
   * @returns An array of all tenants in the database if successful, otherwise throws an error
   */
  public async getTenants(): Promise<tenantResponseDTO[]> {
    try {
      return await prisma.tenant.findMany();
    } catch (error) {
      handleDatabaseError("Could not retrieve tenants", error);
    }
  }

  /**
   * Retrieves a single tenant by its ID
   * @param tenantId The ID of the tenant to retrieve
   * @returns The tenant if found, otherwise throws a 404 error
   */
  public async getTenantById(tenantId: number): Promise<tenantResponseDTO | never> {
    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) throw new HttpError({ message: "Tenant not found", statusCode: 404 });
      return tenant;
    } catch (error) {
      handleDatabaseError("Could not retrieve tenant", error);
    }
  }

  /**
   * Creates a new tenant in the database
   * @param data The data to create a new tenant
   * @returns The created tenant if successful, otherwise throws an error
   */
  public async createTenant(data: createTenantData): Promise<tenantResponseDTO | never> {
    try {
      return await prisma.tenant.create({ data });
    } catch (error) {
      handleDatabaseError("Could not create tenant", error);
    }
  }

  /**
   * Updates a tenant's details in the database
   * @param tenantId The ID of the tenant to update
   * @param data The new data to update the tenant with
   * @returns The updated tenant if successful, otherwise throws an error
   */
  public async updateTenant(tenantId: number, data: updateTenantDTO): Promise<tenantResponseDTO | never> {
    try {
      const existingTenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (existingTenant && existingTenant.version !== data.version) {
        throw new HttpError({ message: "Version conflict: The record has been modified by another process", statusCode: 409 });
      }

      const updatedTenant = await prisma.tenant.update({
        where: { id: tenantId },
        data: {
          ...data,
          version: { increment: 1 }, // Increment the version on successful update
        },
      });

      // Check if the update was unsuccessful
      if (!updatedTenant) {
        // Throw an error if the record does not exist
        throw new HttpError({ message: "Tenant not found", statusCode: 404 });
      }
      return updatedTenant;
    } catch (error) {
      handleDatabaseError("Could not update tenant", error);
    }
  }

  /**
   * Deletes a tenant from the database
   * @param tenantId The ID of the tenant to delete
   * @returns The deleted tenant if successful, otherwise throws an error
   */
  public async deleteTenant(tenantId: number): Promise<Tenant | never> {
    try {
      const deletedTenant = await prisma.tenant.delete({ where: { id: tenantId } });
      if (!deletedTenant) throw new HttpError({ message: "Tenant not found", statusCode: 404 });
      return deletedTenant;
    } catch (error) {
      handleDatabaseError("Could not delete tenant", error);
    }
  }
}
