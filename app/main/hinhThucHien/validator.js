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

exports.createHinhThucHien = {
  tenHinhThuc: Joi.string().required()
};

exports.updateHinhThucHien = {
  tenHinhThuc: Joi.string()
};

exports.activate = Joi.boolean().required();
