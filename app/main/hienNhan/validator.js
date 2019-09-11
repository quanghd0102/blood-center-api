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

exports.createHienNhan = {
  idNguoiNhan: Joi.string().required(),
  idNguoiHien: Joi.string().required(),
  maHinhThucHien: Joi.string().required(),
  maDiaDiemHien: Joi.string(),
  maPhuongThucHien: Joi.string().required(),
  thoigianHien: Joi.date().required(),
  ghiChu: Joi.string(),
  theTich: Joi.number().required(),
  maKho: Joi.string(),
  maMau: Joi.string().required(),
  maCongThucMau: Joi.string()
};

exports.updateHienNhan = {};

exports.activate = Joi.boolean().required();
