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

const getPostByid = (id) => BlogPost.findOne({
  where: { id },
  include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } }],
});

const deletePost = async (id, userId) => {
  const verifyId = await BlogPost.findOne({
    where: { id },
  });
  if (!verifyId) {
    return { type: 404, message: 'Post does not exist' };
  }
  if (verifyId.userId !== userId) {
    return { type: 401, message: 'Unauthorized user' };
  }
  await BlogPost.destroy({ where: { id } });
  return { type: null };
};

module.exports = {
  createPost,
  getAllPosts,
  getPostByid,
  deletePost,
};