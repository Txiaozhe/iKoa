/*
 * Revision History:
 *     Initial: 2017/10/14        Tang Xiaoji
 */

'use strict';

const user = require('../../service/user')();
const ws = require('../../service/websocket')();

module.exports = {
  user,
  ws,
};
