const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let cnt = 0;
  for (let inner of backyard) {
    inner.forEach(element => {
      if (element == '^^') {
        cnt++;
      };
    });
  }
  return cnt;
};

module.exports = {
  countCats
};
