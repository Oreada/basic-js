const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let s = 0; s < matrix.length; s++) {
    result.push([]);
    for (let c = 0; c < matrix[0].length; c++) {
      result[s].push(0);
    }
  };

  for (let s = 0; s < matrix.length; s++) {
    for (let c = 0; c < matrix[0].length; c++) {
      result[s][c] =
        ge(matrix, s - 1, c - 1) + //
        ge(matrix, s, c - 1) + //
        ge(matrix, s - 1, c + 1) + //
        ge(matrix, s - 1, c) + //
        ge(matrix, s + 1, c + 1) + //
        ge(matrix, s + 1, c) + //
        ge(matrix, s, c + 1) + //
        ge(matrix, s + 1, c - 1); //
    }
  }
  return result;
}

function ge(matrix, s, c) {
  if (c >= 0 && s >= 0 && s < matrix.length && c < matrix[0].length) {
    return (matrix[s][c] ? 1 : 0);
  } else {
    return 0;
  }
}

module.exports = {
  minesweeper
};
