'use strict';

const TinhTrangHienController = require('./controller');
const validator = require('./validator');

const controller = new TinhTrangHienController();

exports.getMany = {
  description: 'Get TinhTrangHien list',
  notes: 'Return TinhTrangHien items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count TinhTrangHien list',
  notes: 'Return a count result of TinhTrangHien items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a TinhTrangHien',
  notes: 'Return a TinhTrangHien by id',
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
  description: 'Create a new TinhTrangHien',
  notes: 'Return created TinhTrangHien',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createTinhTrangHien
  }
};

exports.updateOne = {
  description: 'Update TinhTrangHien',
  notes: 'Return updated TinhTrangHien by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateTinhTrangHien
  }
};

exports.deleteOne = {
  description: 'Delete a TinhTrangHien',
  notes: 'Return deleted TinhTrangHien by id',
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
