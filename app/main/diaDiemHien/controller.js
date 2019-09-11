'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const DiaDiemHienService = require('./service');

class DiaDiemHienController extends BaseControllerCRUD {
  constructor() {
    super(new DiaDiemHienService());
  }
}

module.exports = DiaDiemHienController;
