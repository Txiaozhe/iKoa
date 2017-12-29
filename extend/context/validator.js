/*
 * Revision History:
 *     Initial: 2017/10/13        Tang Xiaoji
 */

'use strict';

function validate(schema, data) {
  data = data || this.request.body;

  const result = this.app.validator.validate(data, schema);
  if (result.error !== null) {
    console.log(`validate error ${result.error}`);
    return false;
  }
  return true;
}

module.exports = validate;
