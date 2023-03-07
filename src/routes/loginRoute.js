const express = require('express');

const loginRoute = express.Router();

const { validateLogin } = require('../middleware/validateLogin');
const { loginController } = require('../controllers');

loginRoute.post('/', validateLogin, loginController.login);

module.exports = loginRoute;