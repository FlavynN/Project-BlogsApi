const { Category } = require('../models');

const createCategory = async (name) => {
  const newUser = await Category.create({ name });
  return newUser;
};

module.exports = {
  createCategory,
};