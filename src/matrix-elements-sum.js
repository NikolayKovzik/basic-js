const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  return matrix.reduce((res,array,indMx) => {
      return res + array.reduce((sum,elem,indArr)=>{
         sum += (indMx==0 || matrix[indMx-1][indArr]!==0) ? matrix[indMx][indArr] : 0;
         return sum;
      },0)
  },0);
}


module.exports = {
  getMatrixElementsSum
};
