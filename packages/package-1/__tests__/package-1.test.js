'use strict';

const package1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(package1(), 'Hello from package1');
console.info('package1 tests passed');
