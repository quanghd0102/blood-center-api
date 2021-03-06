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
  idNguoiNhan: Joi.string(),
  idNguoiHien: Joi.string(),
  maHinhThucHien: Joi.string().required(),
  maDiaDiemHien: Joi.string(),
  maPhuongThucHien: Joi.string().required(),
  thoigianHien: Joi.date().required(),
  ghiChu: Joi.string(),
  luuLuong: Joi.number().required(),
  maKho: Joi.string(),
  maMau: Joi.string().required(),
  maCongThucMau: Joi.string().required()
};

exports.updateHienNhan = {
  idNguoiNhan: Joi.string(),
  idNguoiHien: Joi.string(),
  maHinhThucHien: Joi.string(),
  maDiaDiemHien: Joi.string(),
  maPhuongThucHien: Joi.string(),
  thoigianHien: Joi.date(),
  ghiChu: Joi.string(),
  luuLuong: Joi.number(),
  maKho: Joi.string(),
  maMau: Joi.string(),
  maCongThucMau: Joi.string()
};

exports.activate = Joi.boolean().required();
