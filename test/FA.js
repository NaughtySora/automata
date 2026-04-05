'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { StateMachine: MealyMachine } = require('../lib/FA/dfa-mealy');
const { StateMachine: MooreMachine } = require('../lib/FA/nfa-moore');
const { StateMachine } = require('../lib/FA/none.js');

describe('FA', () => {
  describe('DFA', () => {
    it('Mealy', () => {
      const graph = {
        s1: char => ({ next: 's2', output: char.replace(/\d/, '') }),
        s2: char => ({ next: 's4', output: char.toUpperCase() }),
        s3: char => ({ next: 's5', output: char.trim() }),
        s4: () => ({ next: 's3', output: '' }),
        s5: () => ({ next: 's2', output: '-' }),
      };
      const input = '121asd234axd3456789zxcvbnm';
      const machine = new MealyMachine('s1', graph);
      const output = machine.process(input);
      assert.equal(output, '2a-D3-Ad-46-8z-Cb-M');
    });
  });

  describe('NFA', () => {
    it('Moore', () => {
      const graph = {
        S0: { 0: ['S0'], 1: ['S0', 'S1'] },
        S1: { 0: ['S0'], 1: ['S1'] },
      };
      const table = { S0: 'win', S1: 'lose', };
      const input = '0010101101101101';
      const machine = new MooreMachine(graph, table, 'S0');
      const output = machine.process(input);
      assert.deepEqual(output, [
        'win', 'win', 'win',
        'win', 'win', 'win',
        'win', 'lose', 'win',
        'win', 'lose', 'win',
        'win', 'lose', 'win',
        'win'
      ]);
    });
  });

  describe('None', () => {
    it('DFA', () => {
      const changes = [];
      const machine = new StateMachine('s1');
      machine.on('change', () => changes.push('change'));
      machine.on('reset', () => changes.push('reset'));
      machine.set('s2');
      machine.set('s1');
      machine.reset();
      assert.deepEqual(
        changes,
        ['change', 'change', 'reset', 'change']
      );
    });

    it('NFA', () => {
      const graph = {
        s1: { s2: 's3', s1: 's3' },
        s2: { s3: 's2', s1: 's1' },
        s3: { s2: 's3', s1: 's1' },
        transition(prev, current) {
          if (!Object.hasOwn(this, prev)) {
            throw new Error('Unexpected transition');
          }
          const transitions = this[prev];
          if (!Object.hasOwn(transitions, current)) {
            throw new Error('Unexpected transition');
          }
          return transitions[current];
        },
      };
      const changes = [];
      const machine = new StateMachine('s1');
      machine.on('change', () => changes.push('change'));
      machine.on('reset', () => changes.push('reset'));
      machine.set(graph.transition(machine.state, 's1'));
      machine.set(graph.transition(machine.state, 's2'));
      assert.equal(machine.state, 's3');
      machine.reset();
      assert.deepEqual(
        changes,
        ['change', 'change', 'reset', 'change'],
      );
    });
  });
});

