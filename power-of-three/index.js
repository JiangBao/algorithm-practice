/**
 * @param  {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
  while (n && n % 3 === 0) {
    n /= 3;
  }

  return n === 1;
}
