/*
 * Revision History:
 *     Initial: 2017/10/15        Tang Xiaoji
 */

'use strict';

module.exports = () => {
  class WsService {
    test() {
      console.log('test websocket service');
    }
  }

  return new WsService();
};
