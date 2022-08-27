import { createPropertiesService } from "../services/properties/createProperties.service"
import { listPropertiesService } from "../services/properties/listProperties.service"

import { Request, Response } from "express"
 
const createPropertiesController = async (req: Request, res: Response) => {
    const {size, value, address, categoryId} = req.body
    const output = await createPropertiesService({size, value, address, categoryId})
    return res.status(201).json(output)
}

const listPropertiesController = async (req: Request, res: Response) => {
    const output = await listPropertiesService()
    return res.json(output)
}


export { createPropertiesController, listPropertiesController }