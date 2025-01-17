import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': "Contact's name should be a string",
    'string.min': "Contact's name should have at least {#limit} characters",
    'string.max': "Contact's name should have at most {#limit} characters",
    'any.required': "Contact's name is required",
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
    'any.required': 'Phone number is required',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'string.base': 'Contact type should be a string',
      'any.required': 'Contact type is required',
      'any.only':
        'Contact type must be one of the following: work, home, or personal',
    }),
  email: Joi.string().email().min(3).max(20).messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email should be valid',
    'string.min': 'Email should have at least {#limit} characters',
    'string.max': 'Email should have at most {#limit} characters',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite should be a boolean',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': "Contact's name should be a string",
    'string.min': "Contact's name should have at least {#limit} characters",
    'string.max': "Contact's name should have at most {#limit} characters",
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'Contact type should be a string',
    'any.only':
      'Contact type must be one of the following: work, home, or personal',
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': 'Email should be a string',
    'string.min': 'Email should have at least {#limit} characters',
    'string.max': 'Email should have at most {#limit} characters',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite should be a boolean',
  }),
}).min(1);
