'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const NhomMauSchema = new Schema(
  {
    //replace model structure
    tenNhomMau: {
      type: String,
      required: true
    },
    mauHiem: {
      type: Boolean,
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

NhomMauSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('NhomMau', NhomMauSchema);
