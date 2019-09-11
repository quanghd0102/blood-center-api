'use strict';

const HoatDongController = require('./controller');
const validator = require('./validator');

const controller = new HoatDongController();

exports.getMany = {
  description: 'Get HoatDong list',
  notes: 'Return HoatDong items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count HoatDong list',
  notes: 'Return a count result of HoatDong items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a HoatDong',
  notes: 'Return a HoatDong by id',
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
  description: 'Create a new HoatDong',
  notes: 'Return created HoatDong',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createHoatDong
  }
};

exports.updateOne = {
  description: 'Update HoatDong',
  notes: 'Return updated HoatDong by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateHoatDong
  }
};

exports.deleteOne = {
  description: 'Delete a HoatDong',
  notes: 'Return deleted HoatDong by id',
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
