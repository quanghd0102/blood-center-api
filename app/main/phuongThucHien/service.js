'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class PhuongThucHienService extends BaseServiceCRUD {
  constructor() {
    super(Models.PhuongThucHien, 'PhuongThucHien');
  }
}

module.exports = PhuongThucHienService;
