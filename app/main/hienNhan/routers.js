'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/hienNhan',
    config: handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/hienNhan/{id}',
    config: handler.getOne
  },
  {
    method: 'GET',
    path: '/api/v1/hienNhan/count',
    config: handler.count
  },
  {
    method: 'POST',
    path: '/api/v1/hienNhan',
    config: handler.createOne
  },
  {
    method: 'PUT',
    path: '/api/v1/hienNhan/{id}',
    config: handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/hienNhan/{id}',
    config: handler.deleteOne
  }
];

module.exports = Routes;
