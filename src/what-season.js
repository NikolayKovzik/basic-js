const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(...args) {
  if (args.length == 0)
    return 'Unable to determine the time of year!'
  try {
    args[0].getTime();
  } catch {
    throw new Error("Invalid date!");
  }
  if (!args[0]) {
    return 'Invalid date!'
  }
  if (typeof args[0].getMonth !== 'function') {
    return 'Invalid date!'
  }
  let month = args[0].getMonth();
  if (month <= 1 || month == 11)
    return 'winter'
  if (month <= 4)
    return 'spring'
  if (month <= 7)
    return 'summer'
  if (month <= 10)
    return 'autumn'
  else return 'Invalid date!'
}

module.exports = {
  getSeason
};

//https://stackoverflow.com/questions/5670678/javascript-coding-input-a-specific-date-output-the-season
//https://learn.javascript.ru/date#poluchenie-komponentov-daty