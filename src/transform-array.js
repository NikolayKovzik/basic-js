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
 
function transform(members) {
  if (!Array.isArray(members))
      throw new Error("'arr' parameter must be an instance of the Array!"); 
  let copy = members.slice();
  copy.forEach((element, index) => {
    if (copy[index + 1] && element === '--double-next') {
      copy[index] = copy[index + 1];
    }
    if (copy[index-1] &&  element === '--double-prev') {
      copy[index] = copy[index - 1];
    }
    if (copy[index + 1] && element === '--discard-next') {
      copy.splice(index, 2)
    }
    if (copy[index-1] && element === '--discard-prev') {
      copy.splice(index-1, 2)
    }
  });
  return copy.filter(item=>{
    return ((item !== '--double-next') && (item !== '--double-prev') &&  (item !== '--discard-next') &&  (item !== '--discard-prev'))
  });
}

module.exports = {
  transform
};
