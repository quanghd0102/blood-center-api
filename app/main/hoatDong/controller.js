'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const HoatDongService = require('./service');

class HoatDongController extends BaseControllerCRUD {
  constructor() {
    super(new HoatDongService());
  }
}

module.exports = HoatDongController;
