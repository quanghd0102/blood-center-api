'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const KhoDuTruNhomMauSchema = new Schema(
  {
    //replace model structure
    maMau: {
      type: String,
      required: true
    },
    maKho: {
      type: String,
      required: true
    },
    theTich: {
      type: Number,
      required: true
    },
    luuLuongMau: {
      type: Number,
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

KhoDuTruNhomMauSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('KhoDuTruNhomMau', KhoDuTruNhomMauSchema);
