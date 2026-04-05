'use strict';

class StateMachine {
  #graph = null;
  #table = null;
  #state;

  constructor(graph, table, state) {
    this.#graph = graph;
    this.#state = state;
    this.#table = table;
  }

  process(input) {
    let states = new Set([this.#state]);
    const output = [];
    for (const char of input) {
      for (const state of states) {
        var variants = this.#graph[state][char];
        if (variants === undefined) throw SyntaxError('Invalid token');
      }
      states = new Set(variants);
      output.push(this.#table[variants[0]]);
    }
    return output;
  }
}

module.exports = { StateMachine };