'use strict';

const KhoDuTruController = require('./controller');
const validator = require('./validator');

const controller = new KhoDuTruController();

exports.getMany = {
  description: 'Get KhoDuTru list',
  notes: 'Return KhoDuTru items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count KhoDuTru list',
  notes: 'Return a count result of KhoDuTru items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a KhoDuTru',
  notes: 'Return a KhoDuTru by id',
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
  description: 'Create a new KhoDuTru',
  notes: 'Return created KhoDuTru',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createKhoDuTru
  }
};

exports.updateOne = {
  description: 'Update KhoDuTru',
  notes: 'Return updated KhoDuTru by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateKhoDuTru
  }
};

exports.deleteOne = {
  description: 'Delete a KhoDuTru',
  notes: 'Return deleted KhoDuTru by id',
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
