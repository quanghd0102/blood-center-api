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
      ref: 'ThanhVien',
      required: true
    },
    idNguoiHien: {
      type: ObjectId,
      ref: 'ThanhVien',
      required: true
    },
    maHinhThucHien: {
      type: ObjectId,
      ref: 'HinhThucHien',
      required: true
    },
    maDiaDiemHien: {
      type: ObjectId,
      ref: 'DiaDiemHen',
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
      type: String,
      required: false
    },
    luuLuong: {
      type: Number,
      required: true
    },
    maKho: {
      type: ObjectId,
      ref: 'KhoDuTru',
      required: false
    },
    maMau: {
      type: ObjectId,
      ref: 'NhomMau',
      required: true
    },
    maCongThucMau: {
      type: ObjectId,
      ref: 'CongThucMau',
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

HienNhanSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('HienNhan', HienNhanSchema);
