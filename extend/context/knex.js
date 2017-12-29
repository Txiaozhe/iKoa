/*
 * Revision History:
 *     Initial: 2017/10/16        Tang Xiaoji
 */

'use strict';

const config = require('../../config');

module.exports = () => {
  return require('knex')({
    client: 'mysql',
    connection: config.mysql,
  });
};
