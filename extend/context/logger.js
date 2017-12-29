/*
 * Revision History:
 *     Initial: 2017/10/15        Tang Xiaoji
 */

'use strict';

const config = require('../../config');

const level = {
  Debug: 1,
  Verbose: 2,
  Info: 3,
  Warn: 4,
  Error: 5,
};

let Level = config.logger.level || level.Info;

function setLoggerLevel(l) {
  Level = l;
}

function debug(d) {
  if (Level >= level.Debug) {
    console.log(`[DEBUG]: ${d}`);
  }
}

function verbose(v) {
  if (Level >= level.Verbose) {
    console.log(`[VERBOSE]: ${v}`);
  }
}

function info(i) {
  if (Level >= level.Info) {
    console.log(`[INFO]: ${i}`);
  }
}

function warn(w) {
  if (Level >= level.Warn) {
    console.log(`[WARN]: ${w}`);
  }
}

function error(e) {
  if (Level >= level.Error) {
    console.log(`[ERROR]: ${e}`);
  }
}

module.exports = {
  debug,
  verbose,
  info,
  error,
  warn,
  setLoggerLevel,
};
