/*
 * Revision History:
 *     Initial: 2017/10/16        Tang Xiaoji
 */

'use strict';

const config = require('../../config');
const mongoose = require('mongoose');

module.exports = () => {
  mongoose.Promise = Promise;

  const db = mongoose.createConnection(config.mongo.uri);

  // db.Schema = mongoose.Schema;

  db.on('connected', () => {
    console.log('mongodb is connected!');
  });

  db.on('error', err => {
    console.log('mongodb connection error: ', err);
  });

  db.on('reconnected', () => {
    console.log('mongodb has been reconnected!');
  });

  db.on('disconnected', () => {
    console.log('mongodb connection closed!');
  });

  return db;
};
