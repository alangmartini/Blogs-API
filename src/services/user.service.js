const models = require('../models');

const findByEmail = async (email) => {
  try {
    const user = await models.User.findOne({ where: { email } });

    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const registerUser = async (displayName, email, password, image) => {
  try {
    const user = await models.User.create({ displayName, email, password, image });

    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const getById = async (id) => {
  try {
    const user = await models.User.findByPk(id);

    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const getAll = async () => {
  try {
    const users = await models.User.findAll();

    return users;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  findByEmail,
  registerUser,
  getById,
  getAll,
};