'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/test', {
  useNewUrlParser: true
});

function setId(schema) {
  schema.virtual('id').get(function () {
    return this._id.toHexString();
  });
}

function builderFunc(schema) {
  schema.statics.queryBuilder = function (query) {
    let builder;
    let count;
    builder = this.find();
    if (query.filter) {
      builder = builder.where(query.filter);
    }
    if (!query.notPaginate) {
      count = this.count(builder);
    }
    if (query.page && query.perPage) {
      builder = builder.limit(query.perPage);
      builder = builder.skip((query.page - 1) * query.perPage);
    } else if (query.limit) {
      builder = builder.limit(query.limit);
      if (query.offset) {
        builder = builder.skip(query.offset);
      }
    }
    if (query.orderBy) {
      builder = builder.sort(query.orderBy);
    }
    if (query.includes) {
      builder = builder.populate(query.includes);
    }
    if (count) {
      return Promise.all([builder.exec(), count.exec()]).then((result) => ({
        data: result[0],
        total: result[1]
      }));
    }
    return builder.exec();
  };
}

mongoose.plugin(builderFunc);
mongoose.plugin(setId);

module.exports = mongoose;
