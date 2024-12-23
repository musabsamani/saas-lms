import { Router } from "express";
import { getAllDivision, getTenantDivisionHierarchy, createDivision, getTenantDivisionList, getDivisionById, updateDivision, deleteDivision } from "../controllers/divisionController";
import { createDivisionSchema, updateDivisionSchema } from "../validations/divisionValidationSchemas";
import { validateRequestBody } from "../middlewares/validateRequestBody";
import { IsValidIdParams } from "../middlewares/IsValidIdParams";
import { isAuthorized } from "../middlewares/isAuthorized";
import { validateReqParamsIdMatch } from "../middlewares/validateReqParamsIdMatch";
import { validateTenantIdMatch } from "../middlewares/validateTenantIdMatch";

/**
 * Express router to handle division-related routes.
 *
 * This router provides the following routes:
 * - GET `/` - Fetch all divisions.
 * - GET `/:id` - Fetch a division by ID.
 * - POST `/` - Create a new division.
 * - PUT `/:id` - Update a division by ID.
 * - DELETE `/:id` - Delete a division by ID.
 *
 * Middleware:
 * - `validateIdParams` ensures that the division ID is valid. It used for routes with `/:id` parameter
 * - `matchRequestIds` ensures that the ID in the request body matches the ID in the request parameters
 * - `validateRequestBody` validates request bodies for POST and PUT operations
 *
 * @module divisionRouter
 * @type {Router}
 */
const router: Router = Router();

/**
 * GET /api/divisions/all
 *
 * Fetch all divisions in the database
 *
 * @route GET /api/divisions/all
 * @group Divisions - Operations related to divisions
 * @access Public
 * @returns {Promise<Response>} 200 - The division object if found.
 * @returns {Promise<Response>} 500 - An error occurred while fetching the division.
 */
router.get("/all", isAuthorized({ allowedRoles: ["saasOwner"] }), getAllDivision);

/**
 * Retrieves a tenant's division hierarchy as a nested structure of divisions
 *
 * @route GET /api/divisions/tenants/hierarchy/:id
 * @group Divisions - Operations related to divisions
 * @access Public
 * @param {number} req.params.id - The ID of the tenant to retrieve its hierarchy
 * @returns {Promise<Response>} 200 - The division hierarchy if found.
 * @returns {Promise<Response>} 400 - Bad request: validation error, missing or incorrect tenant ID.
 * @returns {Promise<Response>} 404 - Tenant not found.
 * @returns {Promise<Response>} 500 - An error occurred while fetching the division hierarchy.
 */
router.get("/tenants/hierarchy/:id", [IsValidIdParams, validateTenantIdMatch], getTenantDivisionHierarchy);

/**
 * GET /api/divisions/tenants/:id
 *
 * Fetch all divisions for a specific tenant (as a list).
 *
 * @route GET /api/divisions/tenants/:id
 * @group Divisions - Operations related to divisions
 * @access Public
 * @returns {Promise<Response>} 200 - An array of divisions.
 * @returns {Promise<Response>} 400 - Bad request: validation error, missing or incorrect tenant ID.
 * @returns {Promise<Response>} 404 - Tenant not found.
 * @returns {Promise<Response>} 500 - An error occurred while fetching divisions for a tenant.
 */
router.get("/tenants/:id", [IsValidIdParams, validateTenantIdMatch], getTenantDivisionList);

/**
 * GET /api/divisions/:id
 *
 * Fetch a single division by its ID.
 *
 * @route GET /api/divisions/:id
 * @group Divisions - Operations related to divisions
 * @access Public
 * @param {string} req.params.id - The ID of the division to fetch.
 * @returns {Promise<Response>} 200 - The division object if found.
 * @returns {Promise<Response>} 400 - Bad request: validation error, missing or incorrect division ID.
 * @returns {Promise<Response>} 404 - Division not found.
 * @returns {Promise<Response>} 500 - An error occurred while fetching the division.
 */
router.get("/:id", [IsValidIdParams, validateTenantIdMatch], getDivisionById);

/**
 * POST /api/divisions
 *
 * Create a new division.
 *
 * @route POST /api/divisions
 * @group Divisions - Operations related to divisions
 * @access Public
 * @param {object} req.body - The division data for creating a new division
 * @returns {Promise<Response>} 201 - The created division object.
 * @returns {Promise<Response>} 400 - Bad request: Validation error, missing or incorrect division data.
 * @returns {Promise<Response>} 500 - An error occurred while creating the division.
 */
router.post("/", [validateTenantIdMatch, validateRequestBody(createDivisionSchema)], createDivision);

/**
 * PUT /api/divisions/:id
 *
 * Update an existing division by its ID.
 *
 * @route PUT /api/divisions/:id
 * @group Divisions - Operations related to divisions
 * @access Public
 * @param {string} req.params.id - The ID of the division to update.
 * @param {object} req.body - The updated division data.
 * @returns {Promise<Response>} 200 - The updated division object.
 * @returns {Promise<Response>} 400 - Bad request: Validation error, missing or incorrect division data.
 * @returns {Promise<Response>} 404 - Division not found.
 * @returns {Promise<Response>} 500 - An error occurred while updating the division.
 */
router.put("/:id", [IsValidIdParams, validateReqParamsIdMatch, validateTenantIdMatch, validateRequestBody(updateDivisionSchema)], updateDivision);

/**
 * DELETE /api/divisions/:id
 *
 * Delete a division by its ID.
 *
 * @route DELETE /api/divisions/:id
 * @group Divisions - Operations related to divisions
 * @access Public
 * @param {string} req.params.id - The ID of the division to delete.
 * @returns {Promise<Response>} 200 - A success message indicating the division was deleted.
 * @returns {Promise<Response>} 404 - Division not found.
 * @returns {Promise<Response>} 500 - An error occurred while deleting the division.
 */
router.delete("/:id", [IsValidIdParams, validateTenantIdMatch], deleteDivision);

export { router };
