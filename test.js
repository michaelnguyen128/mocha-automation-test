var increment = require('./index');
var assert = require('assert');

describe('increment function', function() {

  it('increments a positive number', function() {
    var result = increment(1);
    assert.equal(result, 2);
  });

  it('increments a negative number', function() {
    var result = increment(-10);
    assert.equal(result, -9);
  });

  it('fails on strings', function() {
    assert.throws(function() {
      increment("purple");
    });
  });

});
