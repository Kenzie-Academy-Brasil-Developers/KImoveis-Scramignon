import AppDataSource from "../../data-source"
import { Users } from "../../entities/Users.entity"

const listUsersService = async ():Promise<Array<Users>> => {
    const usersRepository = AppDataSource.getRepository(Users)
    const users:Array<Users> = await usersRepository.find()
    return users
}

export { listUsersService }