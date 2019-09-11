'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class KhoDuTruNhomMauService extends BaseServiceCRUD {
  constructor() {
    super(Models.KhoDuTruNhomMau, 'KhoDuTruNhomMau');
  }
}

module.exports = KhoDuTruNhomMauService;
