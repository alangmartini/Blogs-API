/* eslint-disable max-lines-per-function */
const { registerUserSchema } = require('./validation/schema');
const { statusCode } = require('../errors/errors.error');

const nameEmailPassImageMiddleware = async (req, res, next) => {
  try {
    const { error } = registerUserSchema.validate(req.body);

    if (error) {
      return res.status(statusCode.INVALID_REQUEST).send({ error: error.details[0].message });
    }

    return next();
  } catch (error) {
    return res.status(statusCode.INTERNAL_ERROR).send({ message: statusCode.INTERNAL_ERROR });
  }
};

module.exports = { 
  nameEmailPassImageMiddleware,
};
