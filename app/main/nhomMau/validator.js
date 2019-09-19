'use strict';

const Joi = require('@hapi/joi');
const {
  idNumber,
  queryParams,
  objectGeoLocation,
  checkToken,
  searchParams
} = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.searchParams = searchParams;

exports.checkToken = checkToken;

exports.idParam = Joi.string()
  .required()
  .description('id is required');

exports.createNhomMau = {
  tenNhomMau: Joi.string().required(),
  mauHiem: Joi.boolean()
};

exports.updateNhomMau = {
  tenNhomMau: Joi.string(),
  mauHiem: Joi.boolean()
};

exports.activate = Joi.boolean().required();
