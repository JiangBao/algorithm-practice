/**
 * @param  {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let stack = [];

  for (let i = 0, len = s.length; i < len; i++) {
    const c = s.charAt(i);

    if (c === '(') {
      stack.push(')');
    } else if (c === '{') {
      stack.push('}');
    } else if (c === '[') {
      stack.push(']');
    } else if (stack.length === 0 || stack.pop() !== c) {
      return false;
    }
  }

  return stack.length === 0;
}
