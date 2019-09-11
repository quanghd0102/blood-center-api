'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const DiaDiemHienSchema = new Schema(
  {
    //replace model structure
    tenDiaDiem: {
      type: String,
      required: true
    },
    ghiChu: {
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

DiaDiemHienSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('DiaDiemHien', DiaDiemHienSchema);
