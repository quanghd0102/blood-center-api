'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/nhomMau',
    config: handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/nhomMau/{id}',
    config: handler.getOne
  },
  {
    method: 'GET',
    path: '/api/v1/nhomMau/count',
    config: handler.count
  },
  {
    method: 'POST',
    path: '/api/v1/nhomMau',
    config: handler.createOne
  },
  {
    method: 'PUT',
    path: '/api/v1/nhomMau/{id}',
    config: handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/nhomMau/{id}',
    config: handler.deleteOne
  }
];

module.exports = Routes;
