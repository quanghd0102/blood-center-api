'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const HinhThucHienService = require('./service');

class HinhThucHienController extends BaseControllerCRUD {
  constructor() {
    super(new HinhThucHienService());
  }
}

module.exports = HinhThucHienController;
