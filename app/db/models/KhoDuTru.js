'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const KhoDuTruSchema = new Schema(
  {
    //replace model structure
    tenKho: {
      type: String,
      required: true
    },
    diaChi: {
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

KhoDuTruSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('KhoDuTru', KhoDuTruSchema);
