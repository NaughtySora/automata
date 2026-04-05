'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { StateMachine: Simple } = require('../lib/PDA/simple.js');
const { StateMachine, DecisionTable } = require('../lib/PDA/table.js');
const { StateMachine: SmartStack } = require('../lib/PDA/smart-stack.js');

describe('PDA', () => {

  it('simple', () => {
    const machine = new Simple();
    assert.ok(machine.process('((()))'));
    assert.ok(machine.process('((1()))'));
    assert.ok(!machine.process('(()))'));
    assert.ok(!machine.process('()()))'));
  });

  it('table', () => {
    const table = new DecisionTable()
    .add('(', ')')
    .add('<', '>')
    .add('{', '}')
    .add('[', ']');
    const machine = new StateMachine(table);
    assert.ok(machine.process('<>({([[]()])})'));
    assert.ok(!machine.process('<>({([[]())})'));
  });

  it('Smart Stack', () => {
    const machine = new SmartStack(['()', '{}', '<>', '[]']);
    machine.process('<>({([[]()])})');
    try {
      machine.process('<>(([[]()])})');
      assert.fail('should throw');
    } catch (e) {
      assert.equal(e.message, 'Unexpected token');
    }
  });
});