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
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  };

  try {
    date.getDay();
    date.getUTCDate();
  } catch (e) {
    throw new Error('Invalid date!');
  }
  if (!(date instanceof Date) || typeof date.getMonth() != 'number' || typeof date.getTime == 'undefined') {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth() + 1;

  if (month === 12 || month <= 2) {
    return 'winter';
  } else if (month >= 9) {
    return 'autumn';
  } else if (month >= 6) {
    return 'summer';
  } else if (month >= 3) {
    return 'spring';
  };
};

module.exports = {
  getSeason
};
