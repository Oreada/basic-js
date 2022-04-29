const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(firstString, secondString) {
  let counter = 0;
  let secondArray = secondString.split('');

  for (let elem of firstString) {
    let index = secondArray.indexOf(elem);
    if (index === -1) {
      continue;
    } else {
      counter += 1;
      secondArray.splice(index, 1);
    };
  };

  return counter;
};

module.exports = {
  getCommonCharacterCount
};
