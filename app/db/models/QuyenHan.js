'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const QuyenHanSchema = new Schema(
  {
    //replace model structure
    tenQuyenHan: {
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

QuyenHanSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('QuyenHan', QuyenHanSchema);
