/*
 * Revision History:
 *     Initial: 2017/10/13        Tang Xiaoji
 */

'use strict';

const Schema = require('../model/schema');

module.exports = () => {
  const schema = new Schema();

  class UserService {
    async test(ctx) {
      return await ctx.mysql.select('goods');
    }

    async testMongoSave() {
      // mongo test save
      const ava = new schema.schema.Avatar({
        id: 9,
        userid: 9000,
        avatar: 'haha',
        update: '2017-09-09 20:20:20',
      });

      await ava.save();
    }

    async testMongoFind() {
      // mongo test find
      return await schema.schema.Avatar.find({});
    }

    async testTrans(ctx, id) {
      const tran = await ctx.mysql.beginTransaction();

      const goods = {
        userid: 9999,
        name: '测试',
        desc: '999',
        price: 100,
        count: 300,
        bought: 0,
        status: 0,
      };

      const goodsUpdate = {
        id,
        userid: 9999,
        name: '测试',
        desc: '999',
        price: 101,
        count: 299,
        bought: 1,
        status: 0,
      };

      try {
        await tran.insert('goods', goods);
        await tran.update('goods', goodsUpdate);
        await tran.commit();
      } catch (e) {
        await tran.rollback();
        throw e;
      }
    }
  }

  return new UserService();
};
