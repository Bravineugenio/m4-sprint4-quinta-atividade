import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { ICreateUser } from "../../interfaces/user/userTypes";

const userCreateService = async ({ email, name, age }: ICreateUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const newUser = userRepository.create({
    email,
    name,
    age
  });

  await userRepository.save(newUser);

  return newUser;
};

export default userCreateService;
