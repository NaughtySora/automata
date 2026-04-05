'use strict';

class StateMachine {
  toArray(tape) {
    let head = 0;
    let unlimitedMemory = [];
    for (const char of tape) {
      unlimitedMemory[head++] = char;
    }
    return unlimitedMemory;
  }
}

module.exports = { StateMachine };
