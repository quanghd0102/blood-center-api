'use strict';

const ThanhVienController = require('./controller');
const validator = require('./validator');

const controller = new ThanhVienController();

exports.getMany = {
  description: 'Get ThanhVien list',
  notes: 'Return ThanhVien items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count ThanhVien list',
  notes: 'Return a count result of ThanhVien items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a ThanhVien',
  notes: 'Return a ThanhVien by id',
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
  description: 'Create a new ThanhVien',
  notes: 'Return created ThanhVien',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    payload: validator.createThanhVien
  }
};

exports.updateOne = {
  description: 'Update ThanhVien',
  notes: 'Return updated ThanhVien by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateThanhVien
  }
};

exports.deleteOne = {
  description: 'Delete a ThanhVien',
  notes: 'Return deleted ThanhVien by id',
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
