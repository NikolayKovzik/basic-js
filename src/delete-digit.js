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

function deleteDigit(number) {
  let str = (number) ? String(number) : '';
  let maxArr = [];
  for (let i = 0; i < str.length; i++) {
    let temp = str.split('');
    temp.splice(i, 1);
    maxArr.push(temp.join(''))
  }
  return +maxArr.sort((a, b) => b - a)[0]
}

// String.prototype.removeCharAt = function (i) {
//   let temp = this.split(''); 
//   temp.splice(i, 1);
//   return temp.join('');
// }

module.exports = {
  deleteDigit
};

