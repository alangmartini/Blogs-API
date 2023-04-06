const { statusCode } = require('../errors/errors.error');
const { categoryService } = require('../services');

const registerCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryService.createCategory(name);

  if (newCategory.statusCode) {
    const error = newCategory;
    return res.status(error.statusCode).json({ message: error.message });
  }

  res.status(statusCode.SUCCESFULLY_CREATED).json(newCategory);
};

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();

  if (categories.statusCode) {
    const error = categories;
    return res.status(error.statusCode).json({ message: error.message });
  }

  res.status(statusCode.SUCESS).json(categories);
};

module.exports = {
  registerCategory,
  getAllCategories,
};
