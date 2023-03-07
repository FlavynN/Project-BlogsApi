const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoriesService.createCategory(name);

  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};