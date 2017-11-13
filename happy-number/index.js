/**
 * @param  {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  let x = n, y = n;

  while (x > 1) {
    x = cal(x);
    if (x === 1) {return true;}
    y = cal(cal(y));
    if (y === 1) {return true;}
    if (x === y) {return false;}
  }

  return true;
}

/**
 * sum of the squares of its digits
 * @param  {number} n
 * @return {number}
 */
function cal(n) {
  let x = n, s = 0;

  while (x > 0) {
    s = s + (x % 10) * (x % 10);
    x = Math.floor(x / 10);
  }

  return s;
}