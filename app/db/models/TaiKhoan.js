'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const TaiKhoanSchema = new Schema(
  {
    //replace model structure
    username: {
      type: String,
      required: true
    },
    matKhau: {
      type: String,
      required: true
    },
    trangThai: {
      type: Boolean
    },
    maQuyenHan: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

TaiKhoanSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('TaiKhoan', TaiKhoanSchema);
