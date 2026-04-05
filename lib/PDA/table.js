'use strict';

class StateMachine {
  #table = null;

  constructor(table) {
    this.#table = table;
  }

  process(input) {
    const stack = [];
    let acc = '';
    for (const char of input) {
      acc += char;
      const decision = this.#table.decide(char);
      const value = stack[decision.action](char);
      if (decision.expected !== undefined) {
        if (value !== decision.expected) return false;
      }
    }
    return stack.length === 0;
  }
}

class DecisionTable {
  #push = new Set();
  #pop = new Map();

  add(open, close) {
    if (open === close) {
      throw new Error(
        'Open and Close tokens have to be different'
      );
    }
    this.#push.add(open);
    this.#pop.set(close, open);
    return this;
  }

  #recognize(char) {
    const push = this.#push.has(char);
    if (push) return 'push';
    if (this.#pop.has(char)) return 'pop';
    throw new SyntaxError('Unexpected input');
  }

  decide(char) {
    const action = this.#recognize(char);
    return {
      action,
      expected: action == 'pop' ? this.#pop.get(char) : undefined,
    };
  }
}

module.exports = { DecisionTable, StateMachine };
