const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  resultArr: [],

  getLength() {
    return this.resultArr.length;
  },

  addLink(value) {
    if (typeof value == 'undefined') {
      this.resultArr.push(`( )`);
      return this;
    } else {
      this.resultArr.push(`( ${value} )`);
      return this;
    };
  },

  removeLink(position) {
    if (isFinite(position) && (position > 0 && position <= this.resultArr.length)) {
      this.resultArr.splice(position - 1, 1);
      return this;
    } else {
      this.resultArr.splice(0);
      throw new Error("You can't remove incorrect link!");
    };
  },

  reverseChain() {
    this.resultArr.reverse();
    return this;
  },

  finishChain() {
    let resultStr = this.resultArr.join('~~');
    this.resultArr.splice(0);
    return resultStr;
  },
};

module.exports = {
  chainMaker
};
