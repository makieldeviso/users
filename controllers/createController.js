import url from "url";
import path from 'path';
import { validationResult } from "express-validator";
import validateUser from "./userValidation.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

import usersStorage from "../storages/usersStorage.js";

const createController = {
  createViewGet: (req, res) => {
    res.render(path.join(__root, 'views/pages', 'createUser'), {user: {}});
  },

  createUserPost: [validateUser, (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const {firstName, lastName, email, age, bio} = req.body; 
      return res.status(400).render(path.join(__root, '/views/pages', 'createUser'), {
        title: 'Create User',
        errors: errors.array(),
        user: {firstName, lastName, email, age, bio}
      })
    }

    const {firstName, lastName, email, age, bio} = req.body;
    usersStorage.addUser({firstName, lastName, email, age, bio});
    res.redirect('/');
  }]

}

export default createController;