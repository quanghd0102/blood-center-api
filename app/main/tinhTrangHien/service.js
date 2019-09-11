'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class TinhTrangHienService extends BaseServiceCRUD {
  constructor() {
    super(Models.TinhTrangHien, 'TinhTrangHien');
  }
}

module.exports = TinhTrangHienService;
