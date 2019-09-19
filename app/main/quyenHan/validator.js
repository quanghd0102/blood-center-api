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

exports.createQuyenHan = {
  tenQuyenHan: Joi.string().required()
};

exports.updateQuyenHan = { tenQuyenHan: Joi.string() };

exports.activate = Joi.boolean().required();
