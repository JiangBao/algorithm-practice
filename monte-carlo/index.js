/**
 * @param  {number} num
 * @return {number}
 */
const monteCarlo = (num) => {
  let count = 0;
  for (let i = 0; i < num; i++) {
    let x = Math.random();
    let y = Math.random();
    if ((x * x + y * y) < 1) {
      count++;
    }
  }

  return 4 * count / num;
}
