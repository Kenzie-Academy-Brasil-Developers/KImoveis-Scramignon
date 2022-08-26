import AppDataSource from "../../data-source";
import { Users } from "../../entities/Users.entity";

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { AppError } from "../../errors/appError";

import "dotenv/config"

const loginService = async (email: string, password: string):Promise<Object> => {
    const usersRepository = AppDataSource.getRepository(Users)

    const user = await usersRepository.findOneBy({email: email})
    if(!user) throw new AppError(401, "Email or password wrong")

    const doesPasswordMatch = await bcrypt.compare(password, user.password)
    if(!doesPasswordMatch) throw new AppError(401, "Email or password wrong")

    const token = jwt.sign({email: email, id: user.id}, process.env.SECRET_KEY!, {expiresIn: "24h"})
    return {token}
}

export { loginService }