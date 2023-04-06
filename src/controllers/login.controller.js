const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { userService } = require('../services');
const { loginRouter } = require('../router');
const { errorMessages } = require('../errors/errors.error');

const logIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.findByEmail({ email });

  if (!user) {
    return res.status(404).json({ message: errorMessages.FIELDS_REQUIRED });
  }

  const isMatch = password === user.password;

  if (!isMatch) {
    return res.status(401).json({ message: errorMessages.INVALID_FIELDS });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  // Return token
  return res.json({ token });
};

module.exports = {
  logIn,
};