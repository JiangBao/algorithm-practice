const assert = require('assert');
const toLowerCase = require('./index');

describe('test', () => {
  it('should return abc when input ABC', () => {
    assert.equal('abc', toLowerCase('ABC'));
  });
  it('should return abc when input aBc', () => {
    assert.equal('abc', toLowerCase('aBc'));
  });
  it('should return a__b when input A__b', () => {
    assert.equal('a__b', toLowerCase('A__b'));
  });
});