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
  let newMatrix = [];
  matrix.forEach((array,index)=>{
    newMatrix.push([[...array]]);
  });
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      let z = 0
      if ((matrix[i - 1] || [])[j - 1] === true) z++;
      if ((matrix[i - 1] || [])[j] === true) z++;
      if ((matrix[i - 1] || [])[j + 1] === true) z++;
      if ((matrix[i] || [])[j - 1] === true) z++;
      if ((matrix[i] || [])[j + 1] === true) z++;
      if ((matrix[i + 1] || [])[j - 1] === true) z++;
      if ((matrix[i + 1] || [])[j] === true) z++;
      if ((matrix[i + 1] || [])[j + 1] === true) z++;

      newMatrix[i][j] = z;
    }
  }
  return newMatrix
}

module.exports = {
  minesweeper
};
