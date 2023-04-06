const { statusCode } = require('../errors/errors.error');
const categoryService = require('../services');

const registerCategory = async (req, res) => {
    try {
      const { name } = req.body;

      const newCategory = await categoryService.createCategory(name);

      res.status(statusCode.SUCCESFULLY_CREATED).json(newCategory);
    } catch (err) {
      res.status(statusCode.INTERNAL_ERROR).json({ message: err.message });
    }
  };

module.exports = {
    registerCategory,
};
