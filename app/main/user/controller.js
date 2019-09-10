'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const UserService = require('./service');

class UserController extends BaseControllerCRUD {
  constructor() {
    super(new UserService());
  }
}

module.exports = UserController;
