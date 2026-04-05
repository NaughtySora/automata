'use strict';

class StateMachine {
  #graph = null;
  #state;
  #initial;

  constructor(state, graph) {
    this.#initial = state;
    this.#state = state;
    this.#graph = graph;
  }

  process(input) {
    let acc = '';
    for (const char of input) {
      const transition = this.#graph[this.#state];
      const { next, output } = transition(char);
      this.#state = next;
      acc += output;
    }
    this.state = this.#initial;
    return acc;
  }
}

module.exports = { StateMachine };
