'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const TinhTrangHienService = require('./service');

class TinhTrangHienController extends BaseControllerCRUD {
  constructor() {
    super(new TinhTrangHienService());
  }
}

module.exports = TinhTrangHienController;
