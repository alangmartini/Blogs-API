const jwt = require('jsonwebtoken');
const { statusCode, errorMessages } = require('../errors/errors.error');
const { userService } = require('../services');

const jwtSecret = process.env.JWT_SECRET || 'cool_secret';

async function register(req, res) {
  const { displayName, email, password, image } = req.body;

  try {
    const userExists = await userService.findByEmail(email);
    
    if (userExists) {
      return res
      .status(statusCode.ALREADY_REGISTERED)
      .send({ message: errorMessages.ALREADY_REGISTERED });
    }
    
    const newUser = await userService.registerUser(displayName, email, password, image);

    const token = jwt
      .sign({ newUser }, jwtSecret, {
        algorithm: 'HS256',
        expiresIn: '7d',
      });

    res.status(statusCode.SUCCESFULLY_CREATED).json({ token });
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({ message: error.message });
  }
}

module.exports = {
  register,
};