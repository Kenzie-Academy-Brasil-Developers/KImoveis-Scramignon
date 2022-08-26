import { AppError } from "../errors/appError"
import { Request, Response, NextFunction } from "express"


const globalErrorMiddleware = (error: any, req: Request, res: Response, _:NextFunction) => {
    if(error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: "error",
            code: error.statusCode,
            message: error.message
        })
    }
    return res.status(500).json({
        status: "error",
        code: 500,
        message: error.message
    })
}

export { globalErrorMiddleware }