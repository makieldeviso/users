import { body } from "express-validator";

// Error message
const alphaErr = 'Must only contain letters.';
const lengthErr = 'must be between 1 and 10 characters.';
const emailErr = 'Email must be in a valid format e.g. address@domail.com';
const ageErr = 'Age must be specified'

const validateUser = [
  body('firstName').escape()
    .isAlpha().withMessage(alphaErr)
    .isLength({min: 1, max: 10}).withMessage(`First name length ${lengthErr}`),
  body('lastName').escape()
    .isAlpha().withMessage(alphaErr)
    .isLength({min: 1, max: 10}).withMessage(`Last name length ${lengthErr}`),
  body('email').escape()
    .isEmail().withMessage(emailErr),
  body('age').escape()
    .isNumeric().withMessage(ageErr),
  body('bio').escape()
    .optional({values: "falsy"})
    .isLength({max: 200}).withMessage('Maximum bio length is 200 characters')
]

export default validateUser