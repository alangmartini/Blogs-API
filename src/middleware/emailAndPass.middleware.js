const { statusCode: { INVALID_REQUEST } } = require('../errors/errors.error');
const { loginSchema } = require('./validation/schema');

const emailAndPassMiddleware = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(INVALID_REQUEST).json({ message: error.details[0].message });
  }

  return next();
};

module.exports = { 
  emailAndPassMiddleware,
};
