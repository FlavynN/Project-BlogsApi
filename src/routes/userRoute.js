const express = require('express');

const userRoute = express.Router();

const { validToken } = require('../middleware/validateToken');
const { userController } = require('../controllers');
const { validateName, validatePassword, validateEmail } = require('../middleware/validateUser');

userRoute.post('/',
  validateName,
  validatePassword,
  validateEmail,
  userController.createUser);

userRoute.get('/', validToken, userController.getUsers);
userRoute.get('/:id', validToken, userController.getUserById);

module.exports = userRoute;