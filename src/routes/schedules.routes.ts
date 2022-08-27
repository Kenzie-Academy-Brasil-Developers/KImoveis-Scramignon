import { createScheduleController, getPropertyScheduleController } from "../controllers/schedules.controller";
import { Express } from "express";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";

const schedulesRoutes = (app: Express) => {
    app.post("/schedules", verifyAuthMiddleware,createScheduleController)
    app.get("/schedules/properties/:id",verifyAuthMiddleware, isAdmMiddleware ,getPropertyScheduleController)
}

export { schedulesRoutes }