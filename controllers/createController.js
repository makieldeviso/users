import url from "url";
import path from 'path';
import { body, validationResult } from "express-validator";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

import usersStorage from "../storages/usersStorage.js";

// Error message
const alphaErr = 'Must only contain letters.';
const lengthErr = 'must be between 1 and 10 characters.';

const validateUser = [
  body('firstName').trim()
    .isAlpha().withMessage(alphaErr)
    .isLength({min: 1, max: 10}).withMessage(`First name length ${lengthErr}`),
  body('lastName').trim()
    .isAlpha().withMessage(alphaErr)
    .isLength({min: 1, max: 10}).withMessage(`Last name length ${lengthErr}`)
]


const createController = {
  createViewGet: (req, res) => {
    res.render(path.join(__root, 'views/pages', 'createUser'));
  },

  createUserPost: [validateUser, (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render(path.join(__root, '/views/pages', 'createUser'), {
        title: 'Create User',
        errors: errors.array()
      })
    }

    const {firstName, lastName} = req.body;
    usersStorage.addUser({firstName, lastName});
    res.redirect('/');
  }]


}

export default createController;