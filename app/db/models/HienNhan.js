'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const mongoosePaginate = require('mongoose-paginate');

const HienNhanSchema = new Schema(
  {
    //replace model structure
    idNguoiNhan: {
      type: ObjectId,
      ref: 'ThanhVien'
    },
    idNguoiHien: {
      type: ObjectId,
      ref: 'ThanhVien'
    },
    maHinhThucHien: {
      type: ObjectId,
      ref: 'HinhThucHien',
      required: true
    },
    maDiaDiemHien: {
      type: ObjectId,
      ref: 'DiaDiemHien',
      required: false
    },
    maPhuongThucHien: {
      type: ObjectId,
      ref: 'PhuongThucHien',
      required: true
    },
    thoigianHien: {
      type: Date,
      required: true
    },
    ghiChu: {
      type: String
    },
    luuLuong: {
      type: Number,
      required: true
    },
    maKho: {
      type: ObjectId,
      ref: 'KhoDuTru'
    },
    maMau: {
      type: ObjectId,
      ref: 'NhomMau',
      required: true
    },
    maCongThucMau: {
      type: ObjectId,
      ref: 'CongThucMau'
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

HienNhanSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('HienNhan', HienNhanSchema);
