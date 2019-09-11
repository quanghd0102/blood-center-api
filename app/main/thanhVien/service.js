'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class ThanhVienService extends BaseServiceCRUD {
  constructor() {
    super(Models.ThanhVien, 'ThanhVien');
  }
}

module.exports = ThanhVienService;
