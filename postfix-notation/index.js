class Solution {
  constructor() {
    this.ops = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '^': (a, b) => Math.pow(a, b)
    }
  }

  /**
   * @param  {string} expression
   * @return {number}
   */
  postfixNotation(expression) {
    var stack = [];
    
    expression.split(' ').forEach((val) => {
      if (this.ops[val]) {
        val = this.ops[val](stack.splice(-2, 1)[0], stack.splice(-1, 1)[0]);
      } else {
        val = parseFloat(val);
      }
      stack.push(val);
    });

    return stack.pop();
  }
}
