const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let filtered = arr.filter(function (item) {
    return item != -1;
  });
  filtered.sort(function (a, b) {
    return a - b;
  });
  arr.forEach(function (item, index) {
    if (item == -1) {
      filtered.splice(index, 0, item);
    }
  });
  return filtered;
}

module.exports = {
  sortByHeight
};
