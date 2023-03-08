const { Category } = require('../models');

const createCategory = async (name) => {
  const newUser = await Category.create({ name });
  return newUser;
};

const getCategories = () => Category.findAll();

const getCategoryById = async (id) => {
  const category = await id.map((categoryId) => Category.findOne({
    where: { id: categoryId },
  }));
  const result = await Promise.all(category);
  return result;
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
};