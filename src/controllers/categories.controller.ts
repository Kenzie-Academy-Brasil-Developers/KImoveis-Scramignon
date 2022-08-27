import { createCategoriesService } from "../services/categories/createCategories.service"
import { listCategoriesService } from "../services/categories/listCategories.service"
import { getCategoryPropertiesService } from "../services/categories/getCategoryProperties.service"

import { Request, Response } from "express"
import { ICategoryRequest } from "../interfaces/categories"

const createCategoriesController = async (req: Request, res: Response) => {
    const {name}:ICategoryRequest = req.body
    const output = await createCategoriesService({name})
    return res.status(201).json(output)
}

const listCategoriesController = async (req: Request, res: Response) => {
    const output = await listCategoriesService()
    return res.status(200).json(output)
}

const getCategoryPropertiesController = async (req: Request, res: Response) => {
    const {id} = req.params
    const output = await getCategoryPropertiesService(id)
    return res.status(200).json(output)
}

export { createCategoriesController, listCategoriesController, getCategoryPropertiesController }