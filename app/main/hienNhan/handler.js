'use strict';

const HienNhanController = require('./controller');
const validator = require('./validator');

const controller = new HienNhanController();

exports.getMany = {
  description: 'Get HienNhan list',
  notes: 'Return HienNhan items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count HienNhan list',
  notes: 'Return a count result of HienNhan items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a HienNhan',
  notes: 'Return a HienNhan by id',
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
  description: 'Create a new HienNhan',
  notes: 'Return created HienNhan',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createHienNhan
  }
};

exports.updateOne = {
  description: 'Update HienNhan',
  notes: 'Return updated HienNhan by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateHienNhan
  }
};

exports.deleteOne = {
  description: 'Delete a HienNhan',
  notes: 'Return deleted HienNhan by id',
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
