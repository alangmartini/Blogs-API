const { log } = require('console');
const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  }).required().messages({
    'any.required': 'teste',
    'object.base': 'outro teste',
  });


log(loginSchema.validate('teste').error.details)