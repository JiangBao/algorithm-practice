const assert = require('assert');
const flipAndInvertImage = require('./index');

describe('test', function() {
  it('should return [[1,0,0],[0,1,0],[1,1,1]] when input [[1,1,0],[1,0,1],[0,0,0]]', function() {
    assert.deepEqual([[1,0,0],[0,1,0],[1,1,1]], flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
  });
  it('should return [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]] when input [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]', function() {
    assert.deepEqual([[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]], flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));
  });
});
