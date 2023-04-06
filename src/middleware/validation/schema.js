const Joi = require('joi');
const { errorMessages } = require('../../errors/errors.error');

const loginSchema = Joi.object({
  email: Joi.string().required().messages({
    'any.required': errorMessages.FIELDS_REQUIRED,
  }),
  password: Joi.string().required().messages({
    'any.required': errorMessages.FIELDS_REQUIRED,
  }),
});

const registerUserSchema = Joi.object({
  displayName: Joi.string().required(),
  email: Joi.string().email().min(8).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const categoryRegisterSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  loginSchema,
  registerUserSchema,
  categoryRegisterSchema,
};