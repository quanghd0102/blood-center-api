'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const TaiKhoanService = require('./service');

class TaiKhoanController extends BaseControllerCRUD {
  constructor() {
    super(new TaiKhoanService());
  }
}

module.exports = TaiKhoanController;
