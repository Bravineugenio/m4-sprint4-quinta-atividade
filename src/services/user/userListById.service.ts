import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userListByIdService = async (id) => {
    try{
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.manager.findOneBy(User,{id})
        if(!user){
            throw new Error('user not found')
        }
        return user;
    }   catch (err) {
        throw new Error(err);
      }


};

export default userListByIdService;
