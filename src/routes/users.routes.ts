import { createUsersController } from "../controllers/users.controller";
import { listUsersController } from "../controllers/users.controller";
import { deleteUsersController } from "../controllers/users.controller";

import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";

import { Express } from "express";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";

const usersRoutes = (app: Express) => {
    app.post("/users", createUsersController)
    app.get("/users", verifyAuthMiddleware, isAdmMiddleware,listUsersController)
    app.delete("/users/:id", verifyAuthMiddleware, isAdmMiddleware,deleteUsersController)
}


export { usersRoutes }