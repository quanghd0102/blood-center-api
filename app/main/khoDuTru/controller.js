'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const KhoDuTruService = require('./service');

class KhoDuTruController extends BaseControllerCRUD {
  constructor() {
    super(new KhoDuTruService());
  }
}

module.exports = KhoDuTruController;
