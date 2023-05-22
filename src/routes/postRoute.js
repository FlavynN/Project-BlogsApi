const express = require('express');
const { postController } = require('../controllers');

const postRoute = express.Router();
const { validToken } = require('../middleware/validateToken');

postRoute.post('/', validToken, postController.createPost);
postRoute.get('/', validToken, postController.getAllPosts);
postRoute.get('/:id', validToken, postController.getPostByid);
postRoute.delete('/:id', validToken, postController.deletePost);

module.exports = postRoute;