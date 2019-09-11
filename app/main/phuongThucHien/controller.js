'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const PhuongThucHienService = require('./service');

class PhuongThucHienController extends BaseControllerCRUD {
  constructor() {
    super(new PhuongThucHienService());
  }
}

module.exports = PhuongThucHienController;
