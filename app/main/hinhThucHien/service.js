'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class HinhThucHienService extends BaseServiceCRUD {
  constructor() {
    super(Models.HinhThucHien, 'HinhThucHien');
  }
}

module.exports = HinhThucHienService;
