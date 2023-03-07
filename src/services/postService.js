const { BlogPost, User, Category } = require('../models');

const createPost = async (title, content, categoryIds) => {
  const newUser = await BlogPost.create({ title, content, categoryIds });
  return newUser;
};

const getAllPosts = () => BlogPost.findAll({
  include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } }],
});

module.exports = {
  createPost,
  getAllPosts,
};