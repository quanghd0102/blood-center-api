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

exports.createThanhVien = {
  taiKhoan: Joi.string().required(),
  hoTen: Joi.string().required(),
  cmnd: Joi.string().required(),
  gioiTinh: Joi.string(),
  ngaySinh: Joi.date(),
  diaChi: Joi.string(),
  ngheNghiep: Joi.string(),
  soDienThoai: Joi.string(),
  ghiChu: Joi.string(),
  lamSang: Joi.string(),
  soLanHien: Joi.number().required(),
  soLanNhan: Joi.number(),
  thoiGianHienGanNhat: Joi.date(),
  trangThaiHien: Joi.boolean(),
  chieuCao: Joi.number(),
  canNang: Joi.number(),
  huyetAp: Joi.string(),
  venTo: Joi.boolean(),
  maMau: Joi.string(),
  maTinhTrangHien: Joi.string()
};

exports.updateThanhVien = {};

exports.activate = Joi.boolean().required();
