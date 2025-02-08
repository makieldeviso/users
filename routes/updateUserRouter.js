import { Router } from "express";
import updateUserController from "../controllers/updateUserController.js";

const updateUserRouter = Router();

updateUserRouter.get('/:id', updateUserController.updateUserViewGet);
updateUserRouter.post('/:id', updateUserController.updateUserPost);

export default updateUserRouter;