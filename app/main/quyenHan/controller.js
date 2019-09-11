'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const QuyenHanService = require('./service');

class QuyenHanController extends BaseControllerCRUD {
  constructor() {
    super(new QuyenHanService());
  }
}

module.exports = QuyenHanController;
