import { Express } from "express"

import { usersRoutes } from "./users.routes"
import { loginRoutes } from "./login.routes"

const routes = (app: Express) => {
    usersRoutes(app)
    loginRoutes(app)
}

export { routes }