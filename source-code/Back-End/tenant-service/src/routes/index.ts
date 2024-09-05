import { Router } from "express";
// import { tenantRoutes } from "./tenantRoutes";
// import { userRoutes } from "./userRoutes";

const router = Router();

router.get("/", (req, res) => res.json("Hello from tennant-service!"));
// router.use("/tenants", tenantRoutes);
// router.use("/users", userRoutes);

export { router };
