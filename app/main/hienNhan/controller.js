'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const HienNhanService = require('./service');

class HienNhanController extends BaseControllerCRUD {
  constructor() {
    super(new HienNhanService());
  }
}

module.exports = HienNhanController;
