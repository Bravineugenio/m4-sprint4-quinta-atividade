import { Router } from "express";
import deleteUserController from "./controllers/user/deleteUser.controller";
import userCreateController from "./controllers/user/userCreate.controller";
import userListController from "./controllers/user/userList.controller";
import userListByIdController from "./controllers/user/userListById.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userListByIdController);
routes.delete("/users/:id", deleteUserController);

export default routes;
