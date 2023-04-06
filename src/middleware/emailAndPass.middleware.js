const { loginSchema } = require('./validation/schema');

const emailAndPassMiddleware = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  return next();
};

module.exports = { 
  emailAndPassMiddleware,
};
