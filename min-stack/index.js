/*
 * min stack
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-03-13 10:34:19
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-13 11:48:49
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number}  x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.stack.length === 0 || this.minStack[this.minStack.length - 1] >= x) {
    this.minStack.push(x);
  }
  this.stack.push(x);
};

/**
 * @return {number}
 */
MinStack.prototype.pop = function() {
  const elem = this.stack.pop();
  if (this.minStack.length > 0 && this.minStack[this.minStack.length - 1] === elem) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};
