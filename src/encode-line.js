const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let prev = '', cnt = 0, result = '';
  for (let c of str) {
    if (prev == c) {
      cnt++;
    } else {
      if (prev != '') {
        result += (cnt > 1 ? cnt : "") + prev;
      }
      cnt = 1;
      prev = c;
    }
  }
  if (prev != '') {
    result += (cnt > 1 ? cnt : "") + prev;
  }
  return result;
}

module.exports = {
  encodeLine
};
