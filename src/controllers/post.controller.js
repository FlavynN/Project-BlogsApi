const { postService, categoriesService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.payload.id;
  const verifyCategory = await categoriesService.getCategoryById(categoryIds);

  if (!title || !content || !categoryIds) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }

  if (verifyCategory.includes(null)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const newPost = await postService.createPost({ title, content, userId, categoryIds });
  return res.status(201).json(newPost);
};

const getAllPosts = async (_req, res) => {
  const users = await postService.getAllPosts();

  return res.status(200).json(users);
};

module.exports = {
  createPost,
  getAllPosts,
};
