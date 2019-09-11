'use strict';

const QuyenHanController = require('./controller');
const validator = require('./validator');

const controller = new QuyenHanController();

exports.getMany = {
  description: 'Get QuyenHan list',
  notes: 'Return QuyenHan items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count QuyenHan list',
  notes: 'Return a count result of QuyenHan items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a QuyenHan',
  notes: 'Return a QuyenHan by id',
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
  description: 'Create a new QuyenHan',
  notes: 'Return created QuyenHan',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createQuyenHan
  }
};

exports.updateOne = {
  description: 'Update QuyenHan',
  notes: 'Return updated QuyenHan by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateQuyenHan
  }
};

exports.deleteOne = {
  description: 'Delete a QuyenHan',
  notes: 'Return deleted QuyenHan by id',
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
