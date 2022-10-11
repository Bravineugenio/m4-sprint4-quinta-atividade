import { Request, Response } from "express";
import userListByIdService from "../../services/user/userListById.service";

const userListByIdController = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const users = await userListByIdService(id);
        return res.json(users);
    }catch (error) {
        return res.status(404).json({
          message: error.message,
    });}


};

export default userListByIdController;
