const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length
  },
  addLink(...args) {
    (!args.length) ? this.array.push('( )') : this.array.push(`( ${args[0]} )`)
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > this.getLength() || position <= 0){
      this.array.splice(0);
      throw new Error("You can\'t remove incorrect link!");
    }

    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = this.array.join(`~~`);
    this.array.splice(0);
    return result
  }
};


module.exports = {
    chainMaker
};
