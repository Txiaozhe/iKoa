/*
 * Revision History:
 *     Initial: 2017/10/13        Tang Xiaoji
 */

'use strict';

const validateSchema = require('../schema/validate');

module.exports = () => {
  class UserController {
    async testPost(ctx) {
      if (ctx.validate(validateSchema.userSchema)) {
        ctx.body = 'post success';
      } else {
        ctx.body = 'Failed';
      }
    }

    async testGet(ctx) {
      ctx.logger.debug('debug');
      ctx.logger.verbose('verbose');
      ctx.logger.info('info');
      ctx.logger.setLoggerLevel(3);
      ctx.logger.warn('warn');
      ctx.logger.error('error');
    }

    async testMongoSave(ctx) {
      await ctx.service.user.testMongoSave();
      ctx.body = 'success!';
    }

    async testMongoFind(ctx) {
      ctx.body = await ctx.service.user.testMongoFind();
    }

    async testMysqlGet(ctx) {
      ctx.body = await ctx.service.user.test(ctx);
    }

    async testMysqlTrans(ctx) {
      const id = ctx.request.body.id;

      ctx.body = await ctx.service.user.testTrans(ctx, id);
    }
  }

  return new UserController();
};
