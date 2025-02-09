import { Router } from "express";

import deleteController from "../controllers/deleteController.js";

const deleteRouter = Router();

deleteRouter.post('/:id', deleteController.deleteUserPost);

export default deleteRouter;