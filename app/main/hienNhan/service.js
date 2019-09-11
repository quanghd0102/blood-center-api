'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class HienNhanService extends BaseServiceCRUD {
  constructor() {
    super(Models.HienNhan, 'HienNhan');
  }
}

module.exports = HienNhanService;
