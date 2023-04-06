const { statusCode } = require('../errors/errors.error');
const { Category } = require('../models');

async function createCategory(name) {
  try {
    const category = await Category.create({ name });

    return category;
  } catch (error) {
    return { statusCode: statusCode.INTERNAL_ERROR, message: error.message };
  }
}

async function getAllCategories() {
  try {
    const categories = await Category.findAll();

    return categories;
  } catch (error) {
    return { statusCode: statusCode.INTERNAL_ERROR, message: error.message };
  }
}

module.exports = {
  createCategory,
  getAllCategories,
};
