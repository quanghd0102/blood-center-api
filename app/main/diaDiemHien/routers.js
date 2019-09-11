'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/diaDiemHien',
    config: handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/diaDiemHien/{id}',
    config: handler.getOne
  },
  {
    method: 'GET',
    path: '/api/v1/diaDiemHien/count',
    config: handler.count
  },
  {
    method: 'POST',
    path: '/api/v1/diaDiemHien',
    config: handler.createOne
  },
  {
    method: 'PUT',
    path: '/api/v1/diaDiemHien/{id}',
    config: handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/diaDiemHien/{id}',
    config: handler.deleteOne
  }
];

module.exports = Routes;
