'use strict';

const CongThucMauController = require('./controller');
const validator = require('./validator');

const controller = new CongThucMauController();

exports.getMany = {
  description: 'Get CongThucMau list',
  notes: 'Return CongThucMau items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count CongThucMau list',
  notes: 'Return a count result of CongThucMau items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a CongThucMau',
  notes: 'Return a CongThucMau by id',
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
  description: 'Create a new CongThucMau',
  notes: 'Return created CongThucMau',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createCongThucMau
  }
};

exports.updateOne = {
  description: 'Update CongThucMau',
  notes: 'Return updated CongThucMau by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateCongThucMau
  }
};

exports.deleteOne = {
  description: 'Delete a CongThucMau',
  notes: 'Return deleted CongThucMau by id',
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
