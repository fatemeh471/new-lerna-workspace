'use strict';

const package2 = require('..');
const assert = require('assert').strict;

assert.strictEqual(package2(), 'Hello from package2');
console.info('package2 tests passed');
