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

const getPostByid = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostByid(id);

  if (!post) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  }

  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.payload;
  const userId = req.payload.id;
  console.log(req.payload);
  const post = await postService.deletePost(Number(id), userId);

  if (post.type === 401) {
    return res.status(401).json({ message: post.message });
  }

  if (post.type === 404) {
    return res.status(404).json({ message: post.message });
  }

  return res.status(204).json();
};

module.exports = {
  createPost,
  getAllPosts,
  getPostByid,
  deletePost,
};
