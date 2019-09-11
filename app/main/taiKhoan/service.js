'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class TaiKhoanService extends BaseServiceCRUD {
  constructor() {
    super(Models.TaiKhoan, 'TaiKhoan');
  }
}

module.exports = TaiKhoanService;
