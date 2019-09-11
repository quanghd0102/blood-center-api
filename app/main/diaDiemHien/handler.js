'use strict';

const DiaDiemHienController = require('./controller');
const validator = require('./validator');

const controller = new DiaDiemHienController();

exports.getMany = {
  description: 'Get DiaDiemHien list',
  notes: 'Return DiaDiemHien items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count DiaDiemHien list',
  notes: 'Return a count result of DiaDiemHien items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a DiaDiemHien',
  notes: 'Return a DiaDiemHien by id',
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
  description: 'Create a new DiaDiemHien',
  notes: 'Return created DiaDiemHien',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createDiaDiemHien
  }
};

exports.updateOne = {
  description: 'Update DiaDiemHien',
  notes: 'Return updated DiaDiemHien by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateDiaDiemHien
  }
};

exports.deleteOne = {
  description: 'Delete a DiaDiemHien',
  notes: 'Return deleted DiaDiemHien by id',
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
