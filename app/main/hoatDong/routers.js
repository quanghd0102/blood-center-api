'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/hoatDong',
    config: handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/hoatDong/{id}',
    config: handler.getOne
  },
  {
    method: 'GET',
    path: '/api/v1/hoatDong/count',
    config: handler.count
  },
  {
    method: 'POST',
    path: '/api/v1/hoatDong',
    config: handler.createOne
  },
  {
    method: 'PUT',
    path: '/api/v1/hoatDong/{id}',
    config: handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/hoatDong/{id}',
    config: handler.deleteOne
  }
];

module.exports = Routes;
