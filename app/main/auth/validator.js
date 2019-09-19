'use strict';

const Joi = require('@hapi/joi');
const {
  strUsername,
  strEmail,
  strPassword
} = require('../../utils/validatorUtils');

exports.validateLogin = {
  email: strEmail().required(),
  password: strPassword().required()
};

exports.validateRegister = {
  email: strEmail().required(),
  password: strPassword().required()
};

exports.validateRegisterByToken = {
  token: Joi.string().required(),
  password: strPassword().required()
};

exports.forgotPassword = {
  email: strEmail().required()
};

exports.resetPassword = {
  resetPasswordToken: Joi.string().required(),
  password: strPassword().required()
};

exports.changePassword = {
  currentPassword: strPassword().required(),
  password: strPassword().required()
};

exports.validateFacebook = {
  query: {
    access_token: Joi.string().required()
  }
};
