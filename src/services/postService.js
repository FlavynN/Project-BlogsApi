const { BlogPost, User, Category, PostCategory, sequelize } = require('../models');

const createPost = async ({ title, content, userId, categoryIds }) => {
  const newPost = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({
      title, content, userId, published: new Date(), updated: new Date(),

    }, { transaction: t });

    const postId = post.id;

    const categories = await categoryIds.map(async (categoryId) =>
      PostCategory.create({ categoryId, postId }, { transaction: t }));

    await Promise.all(categories);
    return post;
  });
  return newPost;
};

const getAllPosts = () => BlogPost.findAll({
  include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } }],
});

module.exports = {
  createPost,
  getAllPosts,
};