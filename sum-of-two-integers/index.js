/**
 * @param  {number} a
 * @param  {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  if (b == 0) {
    return a;
  }
  let sum, carry;
  sum = a ^ b;
  carry = (a & b) << 1;
  return getSum(sum, carry);
}
