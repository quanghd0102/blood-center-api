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

exports.createHoatDong = {
  tenHoatDong: Joi.string().required(),
  maDiaDiem: Joi.string().required(),
  thoiGian: Joi.date().required(),
  moTa: Joi.string()
};

exports.updateHoatDong = {};

exports.activate = Joi.boolean().required();
