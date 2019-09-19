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

exports.createKhoDuTru = {
  tenKho: Joi.string().required(),
  diaChi: Joi.string(),
  tongKet: Joi.object()
};

exports.updateKhoDuTru = {
  tenKho: Joi.string(),
  diaChi: Joi.string(),
  tongKet: Joi.object()
};

exports.activate = Joi.boolean().required();
