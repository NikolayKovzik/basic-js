const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = ''
  let addition = '';

  if ('addition' in options) {
    for (let i = 0; i < (options.additionRepeatTimes || 1); i++) {
      addition += (!i) ? '' : (options.additionSeparator || '|');
      addition += options.addition;
    }
  }

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    res += str + addition;
    if (i != (options.repeatTimes || 1) - 1) {
      res += options.separator || '+';
    }
  }
  return res || str;
}

module.exports = {
  repeater
};
