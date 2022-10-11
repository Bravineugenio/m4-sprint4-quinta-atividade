import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const users = await deleteUserService(id);
        return res.status(204).send()
    }catch (error) {
        return res.status(404).json({
          message: error.message,
    });}


};

export default deleteUserController;
