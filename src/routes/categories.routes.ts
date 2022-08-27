import { createCategoriesController, listCategoriesController, getCategoryPropertiesController } from "../controllers/categories.controller";
import { Express } from "express";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";

const categoriesRoutes = (app: Express) => {
    app.post("/categories", verifyAuthMiddleware, isAdmMiddleware,createCategoriesController)
    app.get("/categories", listCategoriesController)
    app.get("/categories/:id/properties", getCategoryPropertiesController)
}

export { categoriesRoutes }