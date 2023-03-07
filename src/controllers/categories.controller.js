const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoriesService.createCategory(name);

  return res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const getCategories = await categoriesService.getCategories();

  return res.status(200).json(getCategories);
};

module.exports = {
  createCategory,
  getAllCategories,
};