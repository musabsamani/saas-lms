import { Router } from "express";
import { router as healthCheckEndPoint } from "./healthCheckEndPoint";
import { authMiddleware } from "../middlewares/authMiddleware";
import { router as userRouter } from "./userRouter";
import { router as authRouter } from "./authRouter";

/**
 * Express router to handle user-related routes. *
 * @module UserRouter
 * @type {Router}
 */
const router: Router = Router();

router.use("/users", userRouter);

router.use("/auth", authRouter);

router.use(healthCheckEndPoint);

export { router };
