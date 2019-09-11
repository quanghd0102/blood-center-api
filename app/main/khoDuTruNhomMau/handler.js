'use strict';

const KhoDuTruNhomMauController = require('./controller');
const validator = require('./validator');

const controller = new KhoDuTruNhomMauController();

exports.getMany = {
  description: 'Get KhoDuTruNhomMau list',
  notes: 'Return KhoDuTruNhomMau items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count KhoDuTruNhomMau list',
  notes: 'Return a count result of KhoDuTruNhomMau items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a KhoDuTruNhomMau',
  notes: 'Return a KhoDuTruNhomMau by id',
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
  description: 'Create a new KhoDuTruNhomMau',
  notes: 'Return created KhoDuTruNhomMau',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createKhoDuTruNhomMau
  }
};

exports.updateOne = {
  description: 'Update KhoDuTruNhomMau',
  notes: 'Return updated KhoDuTruNhomMau by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateKhoDuTruNhomMau
  }
};

exports.deleteOne = {
  description: 'Delete a KhoDuTruNhomMau',
  notes: 'Return deleted KhoDuTruNhomMau by id',
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
