'use strict';

const PhuongThucHienController = require('./controller');
const validator = require('./validator');

const controller = new PhuongThucHienController();

exports.getMany = {
  description: 'Get PhuongThucHien list',
  notes: 'Return PhuongThucHien items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count PhuongThucHien list',
  notes: 'Return a count result of PhuongThucHien items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a PhuongThucHien',
  notes: 'Return a PhuongThucHien by id',
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
  description: 'Create a new PhuongThucHien',
  notes: 'Return created PhuongThucHien',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createPhuongThucHien
  }
};

exports.updateOne = {
  description: 'Update PhuongThucHien',
  notes: 'Return updated PhuongThucHien by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updatePhuongThucHien
  }
};

exports.deleteOne = {
  description: 'Delete a PhuongThucHien',
  notes: 'Return deleted PhuongThucHien by id',
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
