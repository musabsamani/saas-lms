import { Router } from "express";
import { router as tenantRouter } from "./tenantRouter";
import { router as subscriptionRouter } from "./subscriptionRouter";
import { router as divisionRouter } from "./divisionRouter";
import { router as healthCheckRouter } from "./healthCheckRouter";
import { authMiddleware } from "../middlewares/authMiddleware";

/**
 * Express router to handle tenant-related routes. *
 * @module TenantRouter
 * @type {Router}
 */
const router: Router = Router();

router.use("/api/v1/tenants", tenantRouter);
router.use("/api/v1/subscriptions", subscriptionRouter);
router.use("/api/v1/divisions", authMiddleware, divisionRouter);
router.use(healthCheckRouter);

export { router };
