'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const HienNhanSchema = new Schema(
  {
    //replace model structure
    idNguoiNhan: {
      type: String,
      required: true
    },
    idNguoiHien: {
      type: String,
      required: true
    },
    maHinhThucHien: {
      type: String,
      required: true
    },
    maDiaDiemHien: {
      type: String,
      required: false
    },
    maPhuongThucHien: {
      type: String,
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
    theTich: {
      type: Number,
      required: true
    },
    maKho: {
      type: String,
      required: false
    },
    maMau: {
      type: String,
      required: true
    },
    maCongThucMau: {
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

HienNhanSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('HienNhan', HienNhanSchema);
