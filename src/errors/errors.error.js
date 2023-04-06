const statusCode = {
  NO_TOKEN: 401,
  INVALID_REQUEST: 400,
  INTERNAL_ERROR: 500,
  SUCCESFULLY_CREATED: 201,
};

const errorMessages = {
  ERROR_HASHING_PASSWORD: 'Error hashing password',
  FIELDS_REQUIRED: 'Some required fields are missing',
  INVALID_FIELDS: 'Invalid fields',
  NO_TOKEN: 'Token not found',
  INVALID_TOKEN: 'Expired or invalid token',

};

module.exports = {
  statusCode,
  errorMessages,
};