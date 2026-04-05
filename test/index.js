'use strict';

const { resolve } = require('node:path');

const tests = ['FA', 'PDA'];

for (const test of tests) require(resolve(__dirname, `${test}.js`));