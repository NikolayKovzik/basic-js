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
  let minOneArr = [];
  arr.forEach((elem, index) => {
    if (elem == -1) minOneArr.push(index);
  });
  arr = arr.filter((elem) => elem !== -1)
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  minOneArr.forEach((elem) => {
    sortedArr.splice(elem, 0, -1)
  });
  return sortedArr
}

module.exports = {
  sortByHeight
};
