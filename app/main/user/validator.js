'use strict';

const Joi = require('@hapi/joi');
const {
  idNumber,
  queryParams,
  objectGeoLocation,
  checkToken,
  searchParams,
  strUsername,
  strEmail,
  strPassword
} = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.searchParams = searchParams;

exports.checkToken = checkToken;

exports.idParam = Joi.string()
  .required()
  .description('id is required');

exports.createUser = {
  username: Joi.string().required(),
  email: strEmail().required(),
  password: strPassword().required(),
  phoneNumber: Joi.string(),
  avatar: Joi.string()
};

exports.updateUser = {
  email: strEmail().required(),
  password: strPassword().required(),
  phoneNumber: Joi.string(),
  avatar: Joi.string()
};

exports.activate = Joi.boolean().required();
