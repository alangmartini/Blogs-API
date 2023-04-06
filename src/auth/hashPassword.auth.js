const bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');
const { errorMessages: { ERROR_HASHING_PASSWORD } } = require('../errors/errors.error');

async function asyncHashPassword(password) {
  try {
    const saltRounds = 10;
    await bcrypt.hash(password, saltRounds);
  } catch (e) {
    throw Boom.badImplementation(ERROR_HASHING_PASSWORD);
  }
}

function hashPassword(password) {
  try {
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds);
  } catch (e) {
    throw Boom.badImplementation(ERROR_HASHING_PASSWORD);
  }
}

module.exports = {
  asyncHashPassword,
  hashPassword,
};