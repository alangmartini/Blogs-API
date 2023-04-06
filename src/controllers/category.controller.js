const { statusCode } = require('../errors/errors.error');
const categoryService = require('../services');

const registerCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryService.createCategory(name);

  if (newCategory.statusCode) {
    const error = newCategory;
    res.status(error.statusCode).json({ message: error.message });
  }

  res.status(statusCode.SUCCESFULLY_CREATED).json(newCategory);
  };

module.exports = {
    registerCategory,
};
