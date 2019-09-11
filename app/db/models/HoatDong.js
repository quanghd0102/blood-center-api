'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const HoatDongSchema = new Schema(
  {
    //replace model structure
    tenHoatDong: {
      type: String,
      required: true
    },
    maDiaDiem: {
      type: String,
      required: true
    },
    thoiGian: {
      type: Date,
      required: true
    },
    moTa: {
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

HoatDongSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('HoatDong', HoatDongSchema);
