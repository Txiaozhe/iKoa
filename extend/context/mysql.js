/*
 * Revision History:
 *     Initial: 2017/10/16        Tang Xiaoji
 */

'use strict';

const rds = require('ali-rds');
const config = require('../../config');

module.exports = () => {
  return rds(config.mysql);
};
