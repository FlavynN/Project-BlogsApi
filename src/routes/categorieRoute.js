const express = require('express');

const categoriesRoute = express.Router();

const { categoryController } = require('../controllers');
const { validToken } = require('../middleware/validateToken');
const { validateCategorie } = require('../middleware/validateCategories');

categoriesRoute.post('/', validToken, validateCategorie, categoryController.createCategory);

module.exports = categoriesRoute;