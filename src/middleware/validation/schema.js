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

const postSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': errorMessages.FIELDS_REQUIRED,
  }),
  content: Joi.string().required().messages({
    'any.required': errorMessages.FIELDS_REQUIRED,
  }),
  categoryIds: Joi.array().items(Joi.string()).required().messages({
    'any.required': errorMessages.FIELDS_REQUIRED,
  }),
});

const updatePostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = {
  loginSchema,
  registerUserSchema,
  categoryRegisterSchema,
  postSchema,
  updatePostSchema,
};