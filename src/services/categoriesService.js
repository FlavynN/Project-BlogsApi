const { Category } = require('../models');

const createCategory = async (name) => {
  const newUser = await Category.create({ name });
  return newUser;
};

const getCategories = () => Category.findAll();

module.exports = {
  createCategory,
  getCategories,
};