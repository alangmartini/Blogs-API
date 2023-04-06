const { statusCode } = require('../errors/errors.error');
const { categoryRegisterSchema } = require('./validation/schema');

const categoryNameMiddleware = async (req, res, next) => {
  const { error } = categoryRegisterSchema.validate(req.body);

  if (error) {
    return res.status(statusCode.INVALID_REQUEST).json({ message: error.details[0].message });
  }

  next();
};

module.exports = {
  categoryNameMiddleware,
};
