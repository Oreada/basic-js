const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode) {

    this.mode = typeof mode == 'undefined' ? true : mode;
  }
  encrypt(s, key) {
    if (typeof s == 'undefined' || typeof key == 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    s = s.toUpperCase().split('');
    key = key.toUpperCase();
    let shift = [];
    for (let k of key) {
      shift.push(k.charCodeAt(0) - 'A'.charCodeAt(0));
    }
    let spaceSkip = 0;
    s.forEach((element, index) => {
      if (element.charCodeAt(0) >= 'A'.charCodeAt(0) && element.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
        let curShift = shift[(index - spaceSkip) % shift.length];
        if (element.charCodeAt(0) - 'A'.charCodeAt(0) + curShift >= 26) {
          curShift = curShift - 26;
        }
        s[index] = String.fromCharCode(element.charCodeAt(0) + curShift);
      } else {
        spaceSkip++;
      }
    });
    if (!this.mode) {
      s = s.reverse();
    }
    return s.join('');
  }
  decrypt(s, key) {
    if (typeof s == 'undefined' || typeof key == 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    s = s.toUpperCase().split('');
    key = key.toUpperCase();
    let shift = [];
    for (let k of key) {
      shift.push('A'.charCodeAt(0) - k.charCodeAt(0));
    }
    let spaceSkip = 0;
    s.forEach((element, index) => {
      if (element.charCodeAt(0) >= 'A'.charCodeAt(0) && element.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
        let curShift = shift[(index - spaceSkip) % shift.length];
        if (element.charCodeAt(0) - 'A'.charCodeAt(0) + curShift < 0) {
          curShift = curShift + 26;
        }
        s[index] = String.fromCharCode(element.charCodeAt(0) + curShift);
      } else {
        spaceSkip++;
      }
    });
    if (!this.mode) {
      s = s.reverse();
    }
    return s.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
