'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/congThucMau',
    config: handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/congThucMau/{id}',
    config: handler.getOne
  },
  {
    method: 'GET',
    path: '/api/v1/congThucMau/count',
    config: handler.count
  },
  {
    method: 'POST',
    path: '/api/v1/congThucMau',
    config: handler.createOne
  },
  {
    method: 'PUT',
    path: '/api/v1/congThucMau/{id}',
    config: handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/congThucMau/{id}',
    config: handler.deleteOne
  }
];

module.exports = Routes;
