'use strict';

const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    avatar: String,
    phoneNumber: { type: String },
    username: { type: String, unique: true },
    password: { type: String, select: false },
    email: { type: String, unique: true },
    role: {
      type: String,
      default: 'user'
    },
    facebookId: { type: String, index: true },
    googleId: { type: String, index: true },
    resetCode: { type: String, select: false },
    resetPasswordExpire: { type: Date, select: false },
    pushToken: String
  },
  { timestamps: true }
);

const User = mongoose.model('User', schema);

module.exports = User;
