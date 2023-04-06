const jwt = require('jsonwebtoken');
const { statusCode, errorMessages } = require('../errors/errors.error');
const { userService } = require('../services');

const jwtSecret = process.env.JWT_SECRET || 'cool_secret';

async function register(req, res) {
  const { displayName, email, password, image } = req.body;

  try {
    const newUser = await userService.registerUser(displayName, email, password, image);

    if (newUser.statusCode) {
      const error = new Error(newUser.message);
      error.statusCode = newUser.statusCode;

      throw error;
    }
    
    const token = jwt
      .sign({ newUser }, jwtSecret, {
        algorithm: 'HS256',
        expiresIn: '7d',
      });

    res.status(statusCode.SUCCESFULLY_CREATED).json({ token });
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await userService.getAll();

    res.status(statusCode.SUCCESS).json(users);
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({ message: error.message });
  }
}

async function getById(req, res) {
  const { id } = req.params;

  try {
    const user = await userService.getById(id);

    if (!user) {
      return res
        .status(statusCode.NOT_FOUND)
        .json({ message: errorMessages.USER_NOT_FOUND });
    }

    res.status(statusCode.SUCCESS).json(user);
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({ message: error.message });
  }
}

module.exports = {
  register,
  getUsers,
  getById,
};