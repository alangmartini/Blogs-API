const jwt = require('jsonwebtoken');
const { statusCode, errorMessages } = require('../errors/errors.error');
const userService = require('../services/user.service');
const models = require('../models');

// Controller function to register a new user
async function register(req, res) {
  const { displayName, email, password, image } = req.body;

  try {
    const userExists = await models.User.findOne({ email });
    
    if (userExists) {
      return res
      .status(statusCode.ALREADY_REGISTERED)
      .send({ message: errorMessages.ALREADY_REGISTERED });
    }
    
    const newUser = await userService.registerUser(displayName, email, password, image);

    const token = jwt
      .sign({ newUser }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '7d' });

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  register,
};