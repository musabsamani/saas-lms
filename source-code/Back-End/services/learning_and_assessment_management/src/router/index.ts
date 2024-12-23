import { Router } from "express";
import { createTenant, getTenants, getTenantById, updateTenant, deleteTenant } from "../controllers";
import { createTenantSchema, updateTenantSchema } from "../validations/userValidationSchemas";
import { validateRequestBody } from "../middlewares/validateRequestBody";
import { validateIdParams } from "../middlewares/validateIdParams";

/**
 * Express router to handle tenant-related routes.
 *
 * This router provides the following routes:
 * - GET `/` - Fetch all tenants.
 * - GET `/:id` - Fetch a tenant by ID.
 * - POST `/` - Create a new tenant.
 * - PUT `/:id` - Update a tenant by ID.
 * - DELETE `/:id` - Delete a tenant by ID.
 *
 * Middleware:
 * - `validateIdParams` ensures that the tenant ID is valid. It used for routes with `/:id` parameter.
 * - `validateRequestBody` validates request bodies for POST and PUT operations.
 *
 * @module TenantRouter
 * @type {Router}
 */
const router: Router = Router();

/**
 * GET /api/tenants
 *
 * Fetch all tenants from the database.
 *
 * @route GET /api/tenants
 * @group Tenants - Operations related to tenants
 * @access Public
 * @returns {Promise<Response>} 200 - An array of tenants.
 * @returns {Promise<Response>} 500 - An error occurred while fetching tenants.
 */
router.get("/", getTenants);

/**
 * GET /api/tenants/:id
 *
 * Fetch a single tenant by its ID.
 *
 * @route GET /api/tenants/:id
 * @group Tenants - Operations related to tenants
 * @access Public
 * @param {string} req.params.id - The ID of the tenant to fetch.
 * @returns {Promise<Response>} 200 - The tenant object if found.
 * @returns {Promise<Response>} 400 - Bad request.
 * @returns {Promise<Response>} 404 - Tenant not found.
 * @returns {Promise<Response>} 500 - An error occurred while fetching the tenant.
 */
router.get("/:id", validateIdParams, getTenantById);

/**
 * POST /api/tenants
 *
 * Create a new tenant.
 *
 * @route POST /api/tenants
 * @group Tenants - Operations related to tenants
 * @access Public
 * @param {object} req.body - The tenant data for creating a new tenant
 * @returns {Promise<Response>} 201 - The created tenant object.
 * @returns {Promise<Response>} 400 - Validation error, missing or incorrect tenant data.
 * @returns {Promise<Response>} 500 - An error occurred while creating the tenant.
 */
router.post("/", validateRequestBody(createTenantSchema), createTenant);

/**
 * PUT /api/tenants/:id
 *
 * Update an existing tenant by its ID.
 *
 * @route PUT /api/tenants/:id
 * @group Tenants - Operations related to tenants
 * @access Public
 * @param {string} req.params.id - The ID of the tenant to update.
 * @param {object} req.body - The updated tenant data.
 * @returns {Promise<Response>} 200 - The updated tenant object.
 * @returns {Promise<Response>} 400 - Validation error, missing or incorrect tenant data.
 * @returns {Promise<Response>} 404 - Tenant not found.
 * @returns {Promise<Response>} 500 - An error occurred while updating the tenant.
 */
router.put("/:id", validateRequestBody(updateTenantSchema), updateTenant);

/**
 * DELETE /api/tenants/:id
 *
 * Delete a tenant by its ID.
 *
 * @route DELETE /api/tenants/:id
 * @group Tenants - Operations related to tenants
 * @access Public
 * @param {string} req.params.id - The ID of the tenant to delete.
 * @returns {Promise<Response>} 200 - A success message indicating the tenant was deleted.
 * @returns {Promise<Response>} 404 - Tenant not found.
 * @returns {Promise<Response>} 500 - An error occurred while deleting the tenant.
 */
router.delete("/:id", validateIdParams, deleteTenant);

export { router };
