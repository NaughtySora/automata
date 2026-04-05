'use strict';

class StateMachine {
  process(input) {
    const stack = [];
    for (const char of input) {
      if (!StateMachine.#PARENTHESES.has(char)) continue;
      if (char === StateMachine.#OPEN) {
        stack.push(char);
      } else {
        if (stack.length === 0) return false;
        stack.pop();
      }
    }
    return stack.length === 0;
  }

  static #PARENTHESES = new Set(['(', ')']);
  static #OPEN = '(';
}

module.exports = { StateMachine };
