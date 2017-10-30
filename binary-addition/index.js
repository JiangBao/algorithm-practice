/**
 * @param  {string} x
 * @param  {string} y
 * @return {string}
 */
const binaryAddition = (x, y) => {
  let carry = 0, sum = [], xArr = x.split('').reverse(), yArr = y.split('').reverse();
  let len = xArr.length > yArr.length ? xArr.length : yArr.length;

  for (let i = 0; i < len; i++) {
    let xItem = xArr[i] || 0, yItem = yArr[i] || 0;
    let res = parseInt(xItem) + parseInt(yItem) + carry;
    sum.push(res % 2);
    carry = Math.floor(res / 2);
  }
  carry === 1 ? sum.push(carry) : 0;

  return sum.reverse().join('');
}
