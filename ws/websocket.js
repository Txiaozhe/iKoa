/*
 * Revision History:
 *     Initial: 2017/10/15        Tang Xiaoji
 */

'use strict';

const websocket = require('../controller/websocket');
const config = require('./config');

const Msg = {
  header: {
    fromid: 1000,
    toid: 1001,
    type: config.type.msgTypeGeneral,
  },
  body: {
    content: '',
    timestamp: 1111111,
  },
};

module.exports = (app, server) => {
  const WebSocket = require('ws');

  const wss = new WebSocket.Server({ server });

  wss.on('connection', function connection(ws) {
    const conn = websocket(app, ws);
    ws.send(JSON.stringify(Msg));
    ws.on('message', conn.onReceive);
  });
};
