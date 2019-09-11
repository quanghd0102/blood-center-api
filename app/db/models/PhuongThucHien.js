'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const PhuongThucHienSchema = new Schema(
  {
    //replace model structure
    tenPhuongPhap: {
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

PhuongThucHienSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('PhuongThucHien', PhuongThucHienSchema);
