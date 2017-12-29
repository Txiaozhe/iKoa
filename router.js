/*
 * Revision History:
 *     Initial: 2017/10/13        Tang Xiaoji
 */

'use strict';

const router = require('koa-router')();
const user = require('./controller/user')();

router.post('/', user.testPost);
router.get('/', user.testGet);

router.post('/mysql/get', user.testMysqlGet);
router.post('/mysql/trans', user.testMysqlTrans);

router.post('/mongo/save', user.testMongoSave);
router.post('/mongo/find', user.testMongoFind);

module.exports = router;
