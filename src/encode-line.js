const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return [...str.matchAll(/(\w)\1*/gi, `$1`)].reduce((res, letter) => {
    return res + (letter[0].length == 1 ? '' : letter[0].length) + letter[1];
  }, '')
}

module.exports = {
  encodeLine
};
