'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const ThanhVienSchema = new Schema(
  {
    //replace model structure
    taiKhoan: {
      type: String,
      required: true
    },
    hoTen: {
      type: String,
      required: true
    },
    cmnd: {
      type: String,
      required: true
    },
    gioiTinh: {
      type: String,
      required: false
    },
    ngaySinh: {
      type: Date,
      required: false
    },
    diaChi: {
      type: String,
      required: false
    },
    ngheNghiep: {
      type: String,
      required: false
    },
    soDienThoai: {
      type: String,
      required: false
    },
    ghiChu: {
      type: String,
      required: false
    },
    lamSang: {
      type: String,
      required: false
    },
    soLanHien: {
      type: Number,
      required: true
    },
    soLanNhan: {
      type: Number,
      required: false
    },
    thoiGianHienGanNhat: {
      type: Date,
      required: false
    },
    trangThaiHien: {
      type: Boolean,
      required: false
    },
    chieuCao: {
      type: Number,
      required: false
    },
    canNang: {
      type: Number,
      required: false
    },
    huyetAp: {
      type: String,
      required: false
    },
    venTo: {
      type: Boolean,
      required: false
    },
    maMau: {
      type: String,
      required: false
    },
    maTinhTrangHien: {
      type: String,
      required: false
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

ThanhVienSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('ThanhVien', ThanhVienSchema);
