'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const NhomMauService = require('./service');

class NhomMauController extends BaseControllerCRUD {
  constructor() {
    super(new NhomMauService());
  }
}

module.exports = NhomMauController;
