import { Router } from "express";
import { forwardRequest } from "../controllers/forwardRequest";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

// router.use(authMiddleware);

router.get("/", forwardRequest(process.env.TENANT_SERVICE_URL!));
router.post("/", forwardRequest(process.env.TENANT_SERVICE_URL!));
router.put("/", forwardRequest(process.env.TENANT_SERVICE_URL!));
router.delete("/", forwardRequest(process.env.TENANT_SERVICE_URL!));

export { router as tenantRoutes };
