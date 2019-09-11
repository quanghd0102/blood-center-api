'use strict';

const HinhThucHienController = require('./controller');
const validator = require('./validator');

const controller = new HinhThucHienController();

exports.getMany = {
  description: 'Get HinhThucHien list',
  notes: 'Return HinhThucHien items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count HinhThucHien list',
  notes: 'Return a count result of HinhThucHien items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a HinhThucHien',
  notes: 'Return a HinhThucHien by id',
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
  description: 'Create a new HinhThucHien',
  notes: 'Return created HinhThucHien',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createHinhThucHien
  }
};

exports.updateOne = {
  description: 'Update HinhThucHien',
  notes: 'Return updated HinhThucHien by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateHinhThucHien
  }
};

exports.deleteOne = {
  description: 'Delete a HinhThucHien',
  notes: 'Return deleted HinhThucHien by id',
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
