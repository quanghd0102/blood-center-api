'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const ThanhVienService = require('./service');

class ThanhVienController extends BaseControllerCRUD {
  constructor() {
    super(new ThanhVienService());
  }
}

module.exports = ThanhVienController;
