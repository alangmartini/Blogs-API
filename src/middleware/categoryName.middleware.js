const { registerUserSchema } = require('./validation/schema');

const categoryNameMiddleware = (req, res, next) => {
  const { error } = registerUserSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  
  next();
};

module.exports = categoryNameMiddleware;
