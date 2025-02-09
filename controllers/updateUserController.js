import url from "url";
import path from "path";
import { body, validationResult } from "express-validator";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

import usersStorage from "../storages/usersStorage.js";

// Error message
const alphaErr = 'Must only contain letters.';
const lengthErr = 'must be between 1 and 10 characters.';

const validateUpdateUser = [
  body('firstName').trim()
    .isAlpha().withMessage(alphaErr)
    .isLength({min: 1, max: 10}).withMessage(lengthErr),
  body('lastName').trim()
    .isAlpha().withMessage(alphaErr)
    .isLength({min:1, max: 10}).withMessage(lengthErr)
]


const updateUserController = {
  updateUserViewGet: (req, res) => {
    const {id} = req.params;
    const user = usersStorage.getUser(id);

    res.render(path.join(__root, '/views/pages', 'updateUser'), {user: user});
  },

  updateUserPost: [
    validateUpdateUser,
    (req, res) => {
      const errors = validationResult(req);
      const {firstName, lastName} = req.body;
      const {id} = req.params;
      const user = usersStorage.getUser(id);

     
      if (!errors.isEmpty()) {
       console.log(req)
       console.log(firstName, lastName)
        return res.status(400).render(path.join(__root, '/views/pages', 'updateUser'),
          {
            user: user,
            title: 'Update user',
            errors: errors.array()
          }
        )
      }
      
      usersStorage.updateUser(id, {firstName, lastName});
      res.redirect('/');

    }
  ]

}

export default updateUserController;