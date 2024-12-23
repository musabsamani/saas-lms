import { Response } from "express";
import { DivisionService } from "../services/divisionService";
import { createDivisionRequestDTO, divisionExtendedResponseDTO, divisionResponseDTO, updateDivisionDTO } from "../interfaces/divisions";
import { handleControllerError } from "../utils/handleContollerErrors";
import { createResponseObject } from "../utils/createResponseObject";
import { customRequest } from "../interfaces";
import { HttpError } from "../errors/httpError";

// Instantiate the division service
const divisionService = new DivisionService();

/**
 * Controller function to get all divisions stored in the database
 * @param req customRequest object
 * @param res Express Response object
 * @returns A Express Response object with the retrieved divisions
 */
export const getAllDivision = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Call the database service to get all divisions in the database
    const divisions = await divisionService.getAllDivision();

    // Respond with the divisions data if found
    return res.status(200).json(createResponseObject<divisionResponseDTO>({ data: divisions }));
  } catch (error) {
    // Handle any errors that occur during the retrieval of divisions
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to retrieve tenant's divisions" });
  }
};

/**
 * Controller function to get tenant with a given ID it's division hierarchy as a nested structure of divisions
 * @param req customRequest object containing the tenant ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the retrieved divisions
 */
export const getTenantDivisionHierarchy = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract tenant ID from request parameters
    const id = Number(req.params.id);

    // Call the database service to get the divisions belonging to a tenant with the given ID
    const divisions = await divisionService.getTenantDivisionHierarchy(id);

    // Respond with the divisions data if found
    return res.status(200).json(createResponseObject<divisionResponseDTO>({ data: divisions }));
  } catch (error) {
    // Handle any errors that occur during the retrieval of divisions
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to retrieve tenant's divisions" });
  }
};

/**
 * Controller function to get all the divisions related to a tenant with a given ID as a list
 * @param req customRequest object containing the tenant ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the retrieved divisions
 */
export const getTenantDivisionList = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract tenant ID from request parameters
    const id = Number(req.params.id);

    // Call the database service to get the divisions belonging to a tenant with the given ID
    const divisions = await divisionService.getTenantDivisionList(id);

    // Respond with the divisions data if found
    return res.status(200).json(createResponseObject<divisionResponseDTO[]>({ data: divisions }));
  } catch (error) {
    // Handle any errors that occur during the retrieval of divisions
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to retrieve tenant's divisions" });
  }
};

/**
 * Controller function to get a division by its ID
 * @param req customRequest object containing the division ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the retrieved division
 */
export const getDivisionById = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract tenantId ID from request body
    const tenantId = Number(req.body.tenantId);
    if (!tenantId) throw new HttpError({ message: "Tenant ID is missing in the request body", statusCode: 400 });

    // Extract division ID from request parameters
    const divisionId = Number(req.params.id);
    if (!divisionId) throw new HttpError({ message: "Division ID is missing in the request parameters", statusCode: 400 });

    // Call the database service to get the division by ID
    const division = await divisionService.getDivisionById({ divisionId, tenantId });

    // Respond with the division data if found
    return res.status(200).json(createResponseObject<divisionResponseDTO>({ data: division }));
  } catch (error) {
    // Handle any errors that occur during the retrieval of a division
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to retrieve division" });
  }
};

/**
 * Controller function to create a new division
 * @param req customRequest object containing the division data to be created
 * @param res Express Response object
 * @returns A Express Response object with the newly created division
 */

export const createDivision = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract division data from request body
    const requestBody: createDivisionRequestDTO = req.body;

    // Call the database service to create a new division
    const newDivision = await divisionService.createDivision(requestBody);

    // Respond with the newly created division data
    return res.status(201).json(createResponseObject<divisionResponseDTO>({ data: newDivision }));
  } catch (error) {
    // Handle any errors that occur during the creation of a division
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to create division" });
  }
};

/**
 * Controller function to update a division
 * @param req customRequest object containing the division ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the updated division
 */
export const updateDivision = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract division data from request parameters
    const updateData: updateDivisionDTO = req.body;

    // Call the database service to update the division
    const updatedDivision = await divisionService.updateDivision(updateData);

    // Respond with the updated division data
    return res.status(200).json(createResponseObject<divisionResponseDTO>({ data: updatedDivision }));
  } catch (error) {
    // Handle any errors that occur during the update of a division
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to update division" });
  }
};

/**
 * Controller function to delete a division
 * @param req customRequest object containing the division ID in the path parameters
 * @param res Express Response object
 * @returns A Express Response object with the deleted division
 */
export const deleteDivision = async (req: customRequest, res: Response): Promise<Response> => {
  try {
    // Extract tenantId ID from request body
    const tenantId = Number(req.body.tenantId);
    if (!tenantId) throw new HttpError({ message: "Tenant ID is missing in the request body", statusCode: 400 });

    // Extract division ID from request parameters
    const divisionId = Number(req.params.id);
    if (!divisionId) throw new HttpError({ message: "Division ID is missing in the request parameters", statusCode: 400 });

    // Call the database service to delete the division
    const deletedDivision = await divisionService.deleteDivision({ divisionId, tenantId: req.user?.tenantId! });
    return res.status(200).json(createResponseObject<divisionResponseDTO>({ data: { message: "Division deleted successfully", data: deletedDivision } }));
  } catch (error) {
    // Handle any errors that occur during the deletion of a division
    return handleControllerError({ res, error, defaultErrorMessage: "Failed to delete division" });
  }
};
