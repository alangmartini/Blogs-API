const { statusCode } = require('../errors/errors.error');
const { registerUserSchema } = require('./validation/schema');

const categoryNameMiddleware = (req, res, next) => {
  const { error } = registerUserSchema.validate(req.body);

  if (error) {
    return res.status(statusCode.INVALID_REQUEST).json({ error: error.details[0].message });
  }

  next();
};

module.exports = {
  categoryNameMiddleware,
};
