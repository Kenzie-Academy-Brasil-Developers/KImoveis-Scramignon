import { createUsersController } from "../controllers/users.controller";
import { listUsersController } from "../controllers/users.controller";
import { deleteUsersController } from "../controllers/users.controller";

import { Express } from "express";

const usersRoutes = (app: Express) => {
    app.post("/users", createUsersController)
    app.get("/users", listUsersController)
    app.delete("/users/:id", deleteUsersController)
}

export { usersRoutes }