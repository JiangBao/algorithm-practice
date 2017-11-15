/**
 * @param  {number} - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  let num = 0;

  while (n) {
    num++;
    n &= n-1
  }

  return num;
}