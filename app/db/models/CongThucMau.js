'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const CongThucMauSchema = new Schema(
  {
    //replace model structure
    tenCongThuc: {
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

CongThucMauSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('CongThucMau', CongThucMauSchema);
