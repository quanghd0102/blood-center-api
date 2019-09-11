'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/tinhTrangHien',
    config: handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/tinhTrangHien/{id}',
    config: handler.getOne
  },
  {
    method: 'GET',
    path: '/api/v1/tinhTrangHien/count',
    config: handler.count
  },
  {
    method: 'POST',
    path: '/api/v1/tinhTrangHien',
    config: handler.createOne
  },
  {
    method: 'PUT',
    path: '/api/v1/tinhTrangHien/{id}',
    config: handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/tinhTrangHien/{id}',
    config: handler.deleteOne
  }
];

module.exports = Routes;
