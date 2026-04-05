'use strict';

class Stack {
  #store = [];
  #table = new Map();

  constructor(syntax) {
    this.#init(syntax);
  }

  #init(syntax) {
    for (const pair of syntax) {
      const open = pair[0];
      this.#table.set(open, open);
      this.#table.set(pair[1], open);
    }
  }

  #insert(value) {
    this.#store.push(value);
  }

  #evict(value) {
    if (this.empty) throw new Error('Unexpected token');
    if (this.#store.pop() !== value) {
      throw new SyntaxError('Unexpected token');
    }
  }

  consume(char) {
    const stored = this.#table.get(char);
    if (stored === undefined) throw new SyntaxError('Unexpected input');
    if (stored === char) this.#insert(char);
    else this.#evict(stored);
  }

  get empty() {
    return this.#store.length === 0;
  }

  [Symbol.dispose]() {
    const empty = this.empty;
    this.#store.length = 0;
    if (!empty) throw new SyntaxError('Unexpected end of input');
  }
}

class StateMachine {
  #stack = null;
  #running = false;

  constructor(syntax) {
    this.#stack = new Stack(syntax);
  }

  process(input) {
    if (this.#running) return;
    this.#running = true;
    using stack = this.#stack;
    for (const char of input) stack.consume(char);
    this.#running = false;
  }
}

module.exports = { StateMachine };
