'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class NhomMauService extends BaseServiceCRUD {
  constructor() {
    super(Models.NhomMau, 'NhomMau');
  }
}

module.exports = NhomMauService;
