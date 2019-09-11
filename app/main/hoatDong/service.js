'use strict';

const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class HoatDongService extends BaseServiceCRUD {
  constructor() {
    super(Models.HoatDong, 'HoatDong');
  }
}

module.exports = HoatDongService;
