'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/thanhVien',
    config: handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/thanhVien/{id}',
    config: handler.getOne
  },
  {
    method: 'GET',
    path: '/api/v1/thanhVien/count',
    config: handler.count
  },
  {
    method: 'POST',
    path: '/api/v1/thanhVien',
    config: handler.createOne
  },
  {
    method: 'PUT',
    path: '/api/v1/thanhVien/{id}',
    config: handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/thanhVien/{id}',
    config: handler.deleteOne
  }
];

module.exports = Routes;
