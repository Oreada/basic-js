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
  if (typeof str != 'undefined') {
    if (typeof str != 'string') {
      str = String(str);
    };
  };

  if (typeof options.addition != 'undefined') {
    if (typeof options.addition != 'string') {
      options.addition = String(options.addition);
    };
  };

  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  let resultArr = [];
  let modifiedStr = '';
  let innerArr = [];

  for (let i = 0; i < options.repeatTimes; i++) {
    modifiedStr += str;

    for (let j = 0; j < options.additionRepeatTimes; j++) {
      innerArr.push(options.addition);
    };

    modifiedStr = modifiedStr + innerArr.join(options.additionSeparator);
    resultArr.push(modifiedStr);
    innerArr = [];
    modifiedStr = '';
  };

  let resultUltimate = resultArr.join(options.separator);

  return resultUltimate;
}

module.exports = {
  repeater
};
