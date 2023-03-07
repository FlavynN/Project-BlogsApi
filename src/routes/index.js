const express = require('express');

const routes = express.Router();
const { validateLogin } = require('../middleware/validateLogin');

// const { validateToken } = require('../middleware/validateToken');
const { login } = require('../controllers/login.controller');

routes.post('/login', validateLogin, login);

module.exports = routes;