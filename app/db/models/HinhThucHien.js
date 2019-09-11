'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const HinhThucHienSchema = new Schema(
  {
    //replace model structure
    tenHinhThuc: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

HinhThucHienSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('HinhThucHien', HinhThucHienSchema);
