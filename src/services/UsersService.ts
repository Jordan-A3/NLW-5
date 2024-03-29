import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
    private userRepository: Repository<User>

    constructor() {
        this.userRepository = getCustomRepository(UsersRepository)
    }

    async create(email: string){
        const userExist = await this.userRepository.findOne({ email})

        if(userExist){
            return userExist
        }

        const user = this.userRepository.create({email})

        await this.userRepository.save(user)

        return user;
    }
}

export {UsersService}