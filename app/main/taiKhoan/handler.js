'use strict';

const TaiKhoanController = require('./controller');
const validator = require('./validator');

const controller = new TaiKhoanController();

exports.getMany = {
  description: 'Get TaiKhoan list',
  notes: 'Return TaiKhoan items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count TaiKhoan list',
  notes: 'Return a count result of TaiKhoan items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a TaiKhoan',
  notes: 'Return a TaiKhoan by id',
  tags: ['api', 'v1'],
  handler: controller.getOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    }
  }
};

exports.createOne = {
  description: 'Create a new TaiKhoan',
  notes: 'Return created TaiKhoan',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createTaiKhoan
  }
};

exports.updateOne = {
  description: 'Update TaiKhoan',
  notes: 'Return updated TaiKhoan by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateTaiKhoan
  }
};

exports.deleteOne = {
  description: 'Delete a TaiKhoan',
  notes: 'Return deleted TaiKhoan by id',
  tags: ['api', 'v1'],
  handler: controller.deleteOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    }
  }
};
