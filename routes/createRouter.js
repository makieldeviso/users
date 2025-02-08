import { Router } from "express";
import createController from "../controllers/createController.js";

const createRouter = Router();

createRouter.get('/', createController.createViewGet);
createRouter.post('/', createController.createUserPost);

export default createRouter;