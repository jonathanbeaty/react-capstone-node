'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({

  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  businessName: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  zipCode: {
    type: Number
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  passwordConfirm: {
    type: String,
  }
});

UserSchema.methods.serialize = function () {
  return {
    firstName: this.firstName || '',
    lastName: this.lastName || '',
    businessName: this.businessName || '',
    address: this.address || '',
    city: this.city,
    zipCode: this.zipCode,
    username: this.username
  };
};

UserSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', UserSchema);

module.exports = {
  User
};