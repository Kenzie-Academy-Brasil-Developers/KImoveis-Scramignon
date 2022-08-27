import { createPropertiesController, listPropertiesController } from "../controllers/properties.controller";

import { Express } from "express";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";

const propertiesRoutes = (app: Express) => {
    app.post("/properties", verifyAuthMiddleware, isAdmMiddleware, createPropertiesController)
    app.get("/properties", listPropertiesController)
}

export { propertiesRoutes }