const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(int) {
  let intArr = (String(int)).split('');
  let maxNum = 0;

  for (let index = 0; index < intArr.length; index++) {
    let copyArr = intArr.slice();
    copyArr.splice(index, 1);
    let number = Number(copyArr.join(''));
    if (number > maxNum) {
      maxNum = number;
    };
  };
  return maxNum;
}

module.exports = {
  deleteDigit
};
