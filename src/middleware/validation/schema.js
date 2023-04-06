const Joi = require('joi');
const { errorMessages } = require('../../errors/errors.error');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': errorMessages.INVALID_FIELDS,
    'any.required': errorMessages.FIELDS_REQUIRED,
  }),
  password: Joi.string().required().messages({
    'any.required': errorMessages.FIELDS_REQUIRED,
  }),
});

module.exports = {
  loginSchema,
};