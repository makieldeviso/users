import url from "url";
import path from "path";
import { validationResult } from "express-validator";
import validateUser from "./userValidation.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

import usersStorage from "../storages/usersStorage.js";


const updateUserController = {
  updateUserViewGet: (req, res) => {
    const {id} = req.params;
    const user = usersStorage.getUser(id);

    res.render(path.join(__root, '/views/pages', 'updateUser'), {user: user});
  },

  updateUserPost: [
    validateUser,
    (req, res) => {
      const errors = validationResult(req);
      const {firstName, lastName, email, age, bio} = req.body;
      const {id} = req.params;

      if (!errors.isEmpty()) {
        return res.status(400).render(path.join(__root, '/views/pages', 'updateUser'),
          {
            user: {firstName, lastName, email, age, bio},
            title: 'Update user',
            errors: errors.array()
          }
        )
      }
      
      usersStorage.updateUser(id, {firstName, lastName, email, age, bio});
      res.redirect('/');

    }
  ]

}

export default updateUserController;