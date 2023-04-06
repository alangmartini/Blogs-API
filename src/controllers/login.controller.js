const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const { 
  errorMessages,
  statusCode: { INVALID_REQUEST, INTERNAL_ERROR } } = require('../errors/errors.error');

const logIn = async (req, res) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await userService.findByEmail(email);
  } catch (e) {
    return res.status(INTERNAL_ERROR).json({ message: e.message });
  }

  if (!user) {
    return res.status(INVALID_REQUEST).json({ message: errorMessages.INVALID_FIELDS });
  }

  const isMatch = password === user.password;

  if (!isMatch) {
    return res.status(INVALID_REQUEST).json({ message: errorMessages.INVALID_FIELDS });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  // Return token
  return res.json({ token });
};

module.exports = {
  logIn,
};