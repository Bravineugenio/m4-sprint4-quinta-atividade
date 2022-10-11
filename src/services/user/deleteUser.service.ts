import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (id) => {
    try{
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.manager.findOneBy(User,{id})
        if(!user){
            throw new Error('user not found')
        } if (user){
            const deleted = await  userRepository.createQueryBuilder().delete().from(User).where("id = :id", {id}).execute()
            return deleted;
        }
        //const user = await userRepository.createQueryBuilder()delete().from(User).where("id = :id", {id}).execute()
    }   catch (err) {
        throw new Error(err);
      }
};

export default deleteUserService;
