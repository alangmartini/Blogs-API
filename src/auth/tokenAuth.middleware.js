const jwt = require('jsonwebtoken');
const { NO_TOKEN, errorMessages } = require('../errors/errors.error');

const jwtSecret = process.env.JWT_SECRET || 'cool_secret';

function tokenAuth(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(NO_TOKEN).json({ message: errorMessages.NO_TOKEN });
  }

  try {
    const decodedUser = jwt.verify(token, jwtSecret);
    
    req.user = decodedUser;

    next();
  } catch (error) {
    return res.status(NO_TOKEN).json({ message: errorMessages.INVALID_TOKEN });
  }
}

module.exports = { 
  tokenAuth,
};