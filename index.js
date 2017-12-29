/*
 * Revision History:
 *     Initial: 2017/10/13        Tang Xiaoji
 */

'use strict';

const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
const extendKoa = require('./extend');
const router = require('./router');
const websocket = require('./ws/websocket');
const schema = require('./model/schema');

const app = new Koa();

// Extending the app object
extendKoa(app);

// mongo schema
schema.init(app);

// Middlewares
app.use(logger());

app.use(bodyParser({
  jsonLimit: '5mb',
  textLimit: '2mb',
}));

// Loads routes
app.use(router.routes());
app.use(router.allowedMethods());

// Route not exists.
app.use(async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      // page not found
    }
  } catch (err) {
    // error
  }
});

const server = app.listen(config.server.port);

websocket(app, server);
