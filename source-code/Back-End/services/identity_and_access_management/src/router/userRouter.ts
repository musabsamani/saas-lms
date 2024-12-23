import { Router } from "express";
import { getAllUsers, getUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/userController";
import { createUserSchema, updateUserSchema } from "../validations/userValidationSchemas";
import { validateTenantIdMatch } from "../middlewares/validateTenantIdMatch";
import { validateReqParamsIdMatch } from "../middlewares/validateReqParamsIdMatch";
import { validateRequestBody } from "../middlewares/validateRequestBody";
import { IsValidIdParams } from "../middlewares/IsValidIdParams";
import { isAuthorized } from "../middlewares/isAuthorized";
import { PERMISSIONS } from "../config/permissions";
import { ROLES } from "../config/roles";
import { authMiddleware } from "../middlewares/authMiddleware";

/**
 * Express router to handle user-related routes.
 *
 * This router provides the following routes:
 * - GET `/all` - Fetch all users in the database.
 * - GET `/` - Fetch all users for specific tenant.
 * - GET `/:id` - Fetch a user by ID.
 * - POST `/` - Create a new user.
 * - PUT `/:id` - Update a user by ID.
 * - DELETE `/:id` - Delete a user by ID.
 * @module userRouter
 * @type {Router}
 */
const router: Router = Router();

// apply auth middleware
router.use(authMiddleware);

/**
 * GET /api/users
 *
 * Fetch all users from the database from across all tenants.
 *
 * @route GET /api/users/all
 * @group Users - Operations related to users
 * @access Public
 * @returns {Promise<Response>} 200 - An array of users.
 * @returns {Promise<Response>} 500 - An error occurred while fetching users.
 */
router.get("/all", isAuthorized({ allowedRoles: [ROLES.SAAS_OWNER] }), getAllUsers);

/**
 * GET /api/users
 *
 * Fetch all users for specific tenant.
 *
 * @route GET /api/users
 * @group Users - Operations related to users
 * @access Public
 * @returns {Promise<Response>} 200 - An array of users.
 * @returns {Promise<Response>} 500 - An error occurred while fetching users.
 */
router.get("/", isAuthorized({ allowedPermissions: [PERMISSIONS.VIEW_USER] }), getUsers);

/**
 * GET /api/users/:id
 *
 * Fetch a single user by its ID.
 *
 * @route GET /api/users/:id
 * @group Users - Operations related to users
 * @access Public
 * @param {string} req.params.id - The ID of the user to fetch.
 * @returns {Promise<Response>} 200 - The user object if found.
 * @returns {Promise<Response>} 400 - Bad request.
 * @returns {Promise<Response>} 404 - User not found.
 * @returns {Promise<Response>} 500 - An error occurred while fetching the user.
 */
router.get("/:id", IsValidIdParams, isAuthorized({ allowedPermissions: [PERMISSIONS.VIEW_USER] }), getUserById);

/**
 * POST /api/users
 *
 * Create a new user.
 *
 * @route POST /api/users
 * @group Users - Operations related to users
 * @access Public
 * @param {object} req.body - The user data for creating a new user
 * @returns {Promise<Response>} 201 - The created user object.
 * @returns {Promise<Response>} 400 - Validation error, missing or incorrect user data.
 * @returns {Promise<Response>} 500 - An error occurred while creating the user.
 */
router.post("/", [validateRequestBody(createUserSchema), validateTenantIdMatch, isAuthorized({ allowedPermissions: [PERMISSIONS.CREATE_USER] })], createUser);

/**
 * PUT /api/users/:id
 *
 * Update an existing user by its ID.
 *
 * @route PUT /api/users/:id
 * @group Users - Operations related to users
 * @access Public
 * @param {string} req.params.id - The ID of the user to update.
 * @param {object} req.body - The updated user data.
 * @returns {Promise<Response>} 200 - The updated user object.
 * @returns {Promise<Response>} 400 - Validation error, missing or incorrect user data.
 * @returns {Promise<Response>} 404 - User not found.
 * @returns {Promise<Response>} 500 - An error occurred while updating the user.
 */
router.put("/:id", [IsValidIdParams, validateReqParamsIdMatch, validateRequestBody(updateUserSchema), isAuthorized({ allowedPermissions: [PERMISSIONS.UPDATE_USER] })], updateUser);

/**
 * DELETE /api/users/:id
 *
 * Delete a user by its ID.
 *
 * @route DELETE /api/users/:id
 * @group Users - Operations related to users
 * @access Public
 * @param {string} req.params.id - The ID of the user to delete.
 * @returns {Promise<Response>} 200 - A success message indicating the user was deleted.
 * @returns {Promise<Response>} 404 - User not found.
 * @returns {Promise<Response>} 500 - An error occurred while deleting the user.
 */
router.delete("/:id", [IsValidIdParams, isAuthorized({ allowedPermissions: [PERMISSIONS.DELETE_USER] })], deleteUser);

export { router };
