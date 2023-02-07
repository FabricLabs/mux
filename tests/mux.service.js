'use strict';

// testing
const assert = require('assert');

// Types
const Mux = require('../services/mux');

describe('@fabric/mux', function () {
  describe('Mux', function () {
    it('should expose a constructor', function () {
      assert.equal(Mux.constructor instanceof Function, true);
    });

    it('implements start()', function () {
      assert.equal(Mux.prototype.start instanceof Function, true);
    });

    it('implements stop()', function () {
      assert.equal(Mux.prototype.stop instanceof Function, true);
    });
  });
});
