'use strict';

const none = require('./lib/FA/none.js');
const dfaMealy = require('./lib/FA/dfa-mealy.js');
const nfaMoore = require('./lib/FA/nfa-moore.js');

const simple = require('./lib/PDA/simple.js');
const smartStack = require('./lib/PDA/smart-stack.js');
const table = require('./lib/PDA/table.js');

const tm = require('./lib/TM/index.js');

module.exports = {
  fa: { none, dfaMealy, nfaMoore },
  pda: { simple, smartStack, table },
  tm: { simple: tm },
};
