'use strict';

const mongoose = require('../connection');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema(
  {
    password: { type: String, select: true },
    email: { type: String, unique: true },
    maQuyenHan: { type: ObjectId, ref: 'QuyenHan', default: '5d83a6164043f4167940c59f' },
    pushToken: String
  },
  { timestamps: true }
);

const User = mongoose.model('User', schema);

module.exports = User;
