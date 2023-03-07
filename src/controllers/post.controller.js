const { postService } = require('../services');

const createPost = async (req, res) => {
  const payload = req.data;

  const post = await postService.createPost(
    {
      title: req.body.title,
      content: req.body.content,
      categoryIds: payload.id,
    },
  );

  return res.status(200).json({ post });
};

const getAllPosts = async (_req, res) => {
  const users = await postService.getAllPosts();

  return res.status(200).json(users);
};

module.exports = {
  createPost,
  getAllPosts,
};
