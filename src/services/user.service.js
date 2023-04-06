const models = require('../models');

const findByEmail = async (email) => {
  try {
    const user = await models.User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  findByEmail,
};