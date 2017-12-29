/*
 * Revision History:
 *     Initial: 2017/10/17        Tang Xiaoji
 */

'use strict';

const avatar = require('./avatar');

function Schema() {}

Schema.init = function(app) {
  Schema.prototype.schema = {
    Avatar: app.context.mongo.model('avatar', avatar),
  };
};

module.exports = Schema;
