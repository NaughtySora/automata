'use strict';

const { EventEmitter } = require('node:events');

class StateMachine extends EventEmitter {
  #state;
  #init;

  constructor(state) {
    super();
    this.#state = state;
    this.#init = state;
  }

  set(state) {
    this.#state = state;
    this.emit('change', state);
  }

  reset() {
    this.#state = this.#init;
    this.emit('reset');
    this.emit('change', this.#init);
  }

  get state() {
    return this.#state;
  }
}

module.exports = { StateMachine };
