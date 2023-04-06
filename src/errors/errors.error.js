const statusCode = {
  NO_TOKEN: 401,
  INVALID_REQUEST: 400,
  INTERNAL_ERROR: 500,
  SUCCESFULLY_CREATED: 201,
};

const errorMessages = {
  ERROR_HASHING_PASSWORD: 'Error hashing password',
};

module.exports = {
  statusCode,
  errorMessages,
};