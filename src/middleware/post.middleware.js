const { statusCode } = require('../errors/errors.error');
const schema = require('./validation/schema');

const validatePost = (req, res, next) => {
  const { error } = schema.postSchema.validate(req.body);

  if (error) {
    return res
        .status(statusCode.INVALID_REQUEST)
        .json({ error: error.details[0].message });
  }

  next();
};

module.exports = { validatePost };