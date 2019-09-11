'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const CongThucMauService = require('./service');

class CongThucMauController extends BaseControllerCRUD {
  constructor() {
    super(new CongThucMauService());
  }
}

module.exports = CongThucMauController;
