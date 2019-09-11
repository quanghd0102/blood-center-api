'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class DiaDiemHienService extends BaseServiceCRUD {
  constructor() {
    super(Models.DiaDiemHien, 'DiaDiemHien');
  }
}

module.exports = DiaDiemHienService;
