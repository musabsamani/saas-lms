import { Router } from "express";
import { createUser, loginUser } from "../controllers/authController";
import { loginUserSchema } from "../validations/userValidationSchemas";
import { validateTenantIdMatch } from "../middlewares/validateTenantIdMatch";
import { validateReqParamsIdMatch } from "../middlewares/validateReqParamsIdMatch";
import { validateRequestBody } from "../middlewares/validateRequestBody";
import { IsValidIdParams } from "../middlewares/IsValidIdParams";
import { isAuthorized } from "../middlewares/isAuthorized";
import { PERMISSIONS } from "../config/permissions";
import { ROLES } from "../config/roles";
/**
 * Express router to handle authentication related routes.
 *
 * This router provides the following routes:
 * - POST `/login` - to login a user with email and password.
 * - POST `/register` - to register a new user.
 * @module userRouter
 * @type {Router}
 */
const router: Router = Router();

/**
 * POST /api/auth/login
 *
 * Login a user with email and password.
 *
 * @route GET /api/users/:id
 * @group Auth - Operations related to authentication users
 * @access Public
 * @returns {Promise<Response>} 200 - The user successfully logged in.
 * @returns {Promise<Response>} 400 - Validation error, missing or incorrect user data.
 * @returns {Promise<Response>} 500 - An error occurred while logging in the user.
 */
router.post("/login", validateRequestBody(loginUserSchema), loginUser);
// router.post("/", [validateRequestBody(loginUserSchema), validateTenantIdMatch, isAuthorized({ allowedPermissions: [PERMISSIONS.CREATE_USER] })], createUser);

export { router };
