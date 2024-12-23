import { Request, response, Response } from "express";
import { TenantService } from "../services/tenantService";
import { createTenantData, createTenantRequestDTO, tenantResponseDTO, updateTenantDTO } from "../interfaces/tenants";
import { handleControllerError } from "../utils/handleContollerErrors";
import { createResponseObject } from "../utils/createResponseObject";
import { customRequest } from "../interfaces";

// Instantiate the tenant service
const tenantService = new TenantService();

/**
 * Controller function to get all tenants only (softe-deleted ones not included)
 * @param req Express Request object
 * @param res Express Response object
 * @returns A Express Response object with the list of tenants
 */
export const getTenants = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Call the database service to retrieve all tenants
    const tenants = await tenantService.getTenants();

    // Respond with the list of tenants
    return res.status(200).json(createResponseObject<tenantResponseDTO>({ data: tenants }));
  } catch (error) {
    // Handle any errors that occur during the retrieval of tenants
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to retrieve tenants" });
  }
};

/**
 * Controller function to get a tenant by ID
 * @param req Express Request object containing the tenant ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the retrieved tenant
 */
export const getTenantById = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract tenant ID from request parameters
    const tenantId = Number(req.params.id);

    // Call the database service to get the tenant by ID
    const tenant = await tenantService.getTenantById(tenantId);

    // Respond with the tenant data if found
    return res.status(200).json(createResponseObject<tenantResponseDTO>({ data: tenant }));
  } catch (error) {
    // Handle any errors that occur during the retrieval of a tenant
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to retrieve tenant" });
  }
};

/**
 * Controller function to create a new tenant
 * @param req Express Request object
 * @param res Express Response object
 * @returns A Express Response object with the newly created tenant
 */
export const createTenant = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Extract tenant data from request body
    const requestBody: createTenantRequestDTO = req.body;
    const tenantData: createTenantData = {
      subscriptionType: "FREE",
      subscriptionStatus: "TRIAL",
      trialEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // 12 months from now
      subscriptionEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // 12 months from now
      ...requestBody,
    };
    // Call the database service to create a new tenant
    const newTenant = await tenantService.createTenant(tenantData);

    // Respond with the newly created tenant data
    return res.status(201).json(createResponseObject<tenantResponseDTO>({ data: newTenant }));
  } catch (error) {
    // Handle any errors that occur during the creation of a tenant
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to create tenant" });
  }
};

/**
 * Controller function to update a tenant
 * @param req Express Request object containing the tenant ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the updated tenant
 */
export const updateTenant = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Extract tenant ID and updated data from request
    const tenantId = Number(req.params.id);

    // Extract tenant data from request parameters
    const updateData: updateTenantDTO = req.body;
    // Call the database service to update the tenant
    const updatedTenant = await tenantService.updateTenant(tenantId, updateData);
    return res.status(200).json(createResponseObject<tenantResponseDTO>({ data: updatedTenant }));
  } catch (error) {
    // Handle any errors that occur during the update of a tenant
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to update tenant" });
  }
};

/**
 * Controller function to delete a tenant
 * @param req Express Request object containing the tenant ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the deleted tenant
 */
export const deleteTenant = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Extract tenant ID from request parameters
    const tenantId = Number(req.params.id);

    // Call the database service to delete the tenant
    const deletedTenant = await tenantService.deleteTenant(tenantId);
    return res.status(200).json(createResponseObject<tenantResponseDTO>({ data: { message: "Tenant deleted successfully", data: deletedTenant } }));
  } catch (error) {
    // Handle any errors that occur during the deletion of a tenant
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to delete tenant" });
  }
};
