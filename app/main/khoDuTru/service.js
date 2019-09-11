'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class KhoDuTruService extends BaseServiceCRUD {
  constructor() {
    super(Models.KhoDuTru, 'KhoDuTru');
  }
}

module.exports = KhoDuTruService;
