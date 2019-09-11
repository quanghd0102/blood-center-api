'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const TinhTrangHienSchema = new Schema(
  {
    //replace model structure
    tenTinhTrang: {
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

TinhTrangHienSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('TinhTrangHien', TinhTrangHienSchema);
