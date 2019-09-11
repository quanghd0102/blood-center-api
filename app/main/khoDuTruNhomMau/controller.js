'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const KhoDuTruNhomMauService = require('./service');

class KhoDuTruNhomMauController extends BaseControllerCRUD {
  constructor() {
    super(new KhoDuTruNhomMauService());
  }
}

module.exports = KhoDuTruNhomMauController;
