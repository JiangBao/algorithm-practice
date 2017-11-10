/**
 * @param  {number} x
 * @param  {number} y
 * @return {number}
 */
const karatsuba = (x, y) => {
  if (x < 10 || y < 10) {
    return x * y;
  }

  const m = Math.min(size(x), size(y)) - 1;
  const base = Math.pow(10, m);
  const x0 = x % base;
  const x1 = Math.floor(x / base);
  const y0 = y % base;
  const y1 = Math.floor(y / base);

  const z0 = karatsuba(x0, y0);
  const z2 = karatsuba(x1, y1);
  const z1 = karatsuba(x0+x1, y0+y1) - z2 - z0;

  return z2 * Math.pow(base, 2) + z1 * base + z0;
}

/**
 * get size of integer
 * @param  {number} num
 * @return {number} 
 */
const size = (num) => {
  let size = 1;
  while (num >= 10) {
    size++;
    num = Math.round(num / 10);
  }

  return size;
}
