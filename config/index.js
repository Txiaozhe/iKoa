/*
 * Revision History:
 *     Initial: 2017/10/13        Tang xiaoji
 */

'use strict';

module.exports = {
  logger: {
    level: 5,
  },

  server: {
    port: 3000,
  },

  mysql: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'eggshop',
  },

  mongo: {
    uri: 'mongodb://127.0.0.1:27015/eggshop',
  },
};
