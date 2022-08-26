import { Request, Response} from "express"

//services
import { createUsersService } from "../services/users/createUsers.service"
import { listUsersService } from "../services/users/listUsers.service"
import { deleteUsersService } from "../services/users/deleteUsers.service"

import { IUserRequest } from "../interfaces/users"


const createUsersController = async (req: Request, res: Response) => {
    const {name, email, isAdm, password}:IUserRequest = req.body
    const output = await createUsersService({name, email, isAdm, password})
    return res.status(201).json(output)
}

const listUsersController = async (req: Request, res: Response) => {
    const output = await listUsersService()
    return res.status(200).json(output)
}

const deleteUsersController = async (req: Request, res: Response) => {
    const { id } = req.params
    await deleteUsersService(id)
    return res.status(204).send()
}

export { createUsersController, listUsersController, deleteUsersController }