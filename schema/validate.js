/*
 * Revision History:
 *     Initial: 2017/10/13        Tang Xiaoji
 */

'use strict';

/* eslint newline-per-chained-call: 0 */

const joi = require('joi');

const userSchema = joi.object().keys({
  user: joi.string().alphanum().min(3).max(6).required(),
});

module.exports = {
  userSchema,
};
