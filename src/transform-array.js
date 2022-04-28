const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let resultArr = [];

  let prev = '';
  arr.forEach(function (elem) {
    if (prev == '--discard-next') {
      prev = '';
    } else if (elem == '--discard-next') {
      prev = elem;
    } else if (elem == '--discard-prev') {
      if (prev != '') {
        resultArr.pop();
      }
    }
    else if (elem == '--double-next') {
      prev = elem;
    }
    else if (prev == '--double-next') {
      resultArr.push(elem);
      resultArr.push(elem);
      prev = elem;
    }
    else if (elem == '--double-prev') {
      if (resultArr.length > 0 && prev != '') {
        resultArr.push(resultArr[resultArr.length - 1]);
      };
    }
    else {
      resultArr.push(elem);
      prev = elem;
    }

  });
  return resultArr;

}

module.exports = {
  transform
};
