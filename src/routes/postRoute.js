const express = require('express');
const { postController } = require('../controllers');

const postRoute = express.Router();
const { validToken } = require('../middleware/validateToken');

postRoute.post('/', validToken, postController.createPost);
postRoute.get('/', validToken, postController.getAllPosts);

module.exports = postRoute;