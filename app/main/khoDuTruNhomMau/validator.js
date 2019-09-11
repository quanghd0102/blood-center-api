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

exports.createKhoDuTruNhomMau = {
  maMau: Joi.string().required(),
  maKho: Joi.string().required(),
  theTich: Joi.number().required(),
  luuLuongMau: Joi.number()
};

exports.updateKhoDuTruNhomMau = {};

exports.activate = Joi.boolean().required();
