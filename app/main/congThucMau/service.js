'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class CongThucMauService extends BaseServiceCRUD {
  constructor() {
    super(Models.CongThucMau, 'CongThucMau');
  }
}

module.exports = CongThucMauService;
