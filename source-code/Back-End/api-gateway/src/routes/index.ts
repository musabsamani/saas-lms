import { Router } from "express";
import { tenantRoutes } from "./tenantRoutes";
import { userRoutes } from "./userRoutes";

const router = Router();

router.get("/", (req, res) => res.json("Hello World"));
router.use("/tenants", tenantRoutes);
router.use("/users", userRoutes);

export { router as apiGatewayRouter };
