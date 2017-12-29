/*
 * Revision History:
 *     Initial: 2017/10/13        Tang Xiaoji
 */

'use strict';

const joi = require('joi');

module.exports = app => {
  /**
   *  const schema = Joi.object().keys({
   *    username: Joi.string().alphanum().min(3).max(30).required(),
   *    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
   *    access_token: [Joi.string(), Joi.number()],
   *    birthyear: Joi.number().integer().min(1900).max(2013),
   *    email: Joi.string().email()
   *  }).with('username', 'birthyear').without('password', 'access_token');
   */
  app.validator = joi;
  app.context.validate = require('../context/validator');
  app.context.mysql = require('../context/mysql')();
  app.context.knex = require('../context/knex')();
  app.context.mongo = require('../context/mongo')();
  app.context.service = require('../context/service');
  app.context.logger = require('../context/logger');
};
