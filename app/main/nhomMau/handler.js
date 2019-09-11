'use strict';

const NhomMauController = require('./controller');
const validator = require('./validator');

const controller = new NhomMauController();

exports.getMany = {
  description: 'Get NhomMau list',
  notes: 'Return NhomMau items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count NhomMau list',
  notes: 'Return a count result of NhomMau items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a NhomMau',
  notes: 'Return a NhomMau by id',
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
  description: 'Create a new NhomMau',
  notes: 'Return created NhomMau',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createNhomMau
  }
};

exports.updateOne = {
  description: 'Update NhomMau',
  notes: 'Return updated NhomMau by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateNhomMau
  }
};

exports.deleteOne = {
  description: 'Delete a NhomMau',
  notes: 'Return deleted NhomMau by id',
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
