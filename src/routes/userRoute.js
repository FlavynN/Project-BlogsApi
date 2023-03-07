const express = require('express');

const userRoute = express.Router();

const { validToken } = require('../middleware/validateToken');
const { userControler } = require('../controllers');
const { validateName, validatePassword, validateEmail } = require('../middleware/validateUser');

userRoute.post('/',
  validateName,
  validatePassword,
  validateEmail,
  userControler.createUser);

userRoute.get('/', validToken, userControler.getUsers);

module.exports = userRoute;