'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { StateMachine } = require('../lib/TM/index.js');

describe('TM', () => {
  it('toArray', () => {
    const machine = new StateMachine();
    assert.deepEqual(
      machine.toArray('123456'),
      ['1', '2', '3', '4', '5', '6'],
    );
  });
});
