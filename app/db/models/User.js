'use strict';

const mongoose = require('../connection');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema(
  {
    password: { type: String, select: false },
    email: { type: String, unique: true },
    role: {
      type: String,
      default: 'user'
    },
    maQuyenHan: { type: ObjectId, ref: 'QuyenHan' },
    pushToken: String
  },
  { timestamps: true }
);

const User = mongoose.model('User', schema);

module.exports = User;
