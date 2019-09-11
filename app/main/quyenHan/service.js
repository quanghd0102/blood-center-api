'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class QuyenHanService extends BaseServiceCRUD {
  constructor() {
    super(Models.QuyenHan, 'QuyenHan');
  }
}

module.exports = QuyenHanService;
