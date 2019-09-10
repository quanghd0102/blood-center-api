'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class UserService extends BaseServiceCRUD {
  constructor() {
    super(Models.User, 'User');
  }
}

module.exports = UserService;
