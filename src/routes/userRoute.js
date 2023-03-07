const express = require('express');

const userRoute = express.Router();

const { userControler } = require('../controllers');
const { validateName, validatePassword, validateEmail } = require('../middleware/validateUser');

userRoute.post('/',
  validateName,
  validatePassword,
  validateEmail,
  userControler.createUser);

module.exports = userRoute;