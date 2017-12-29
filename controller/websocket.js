/*
 * Revision History:
 *     Initial: 2017/10/15        Tang Xiaoji
 */

'use strict';

const config = require('../ws/config');

module.exports = (app, ws) => {
  class WsController {
    async onSend(msg) {
      ws.send(msg);
    }

    async onReceive(msg) {
      const rec = JSON.parse(msg);

      switch (rec.header.type) {
        case config.type.msgTypeGeneral : {
          app.context.service.ws.test();
          console.log(rec);
          break;
        }
        default : {
          console.log('test msg');
          break;
        }
      }
    }
  }

  return new WsController();
};
