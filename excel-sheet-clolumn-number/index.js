/**
 * @param  {string} s
 * @return {number}
 */
const titleToNumber = (s) => {
  let result = 0, len = s.length;
  for (let i = 0; i < len; i++) {
    result = result * 26 + (s.charCodeAt(i) - 'A'.charCodeAt('A') + 1);
  }
  return result;
}
