import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { routes } from "./routes"

import { Request, Response } from "express"
import { globalErrorMiddleware } from "./middlewares/globalError.middleware"
import { AppError } from "./errors/appError"


const app = express()
app.use(express.json())

routes(app)

app.get("/", async (req: Request, res: Response) => {
    throw new AppError(401, "AppError test")
})

app.use(globalErrorMiddleware)


export default app