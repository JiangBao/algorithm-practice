const assert = require('assert');
const longestPalindrome = require('./index');

describe('test', function() {
  it('should return bad when input badbd', function() {
    assert.equal('bab', longestPalindrome('babbd'));
  });
});