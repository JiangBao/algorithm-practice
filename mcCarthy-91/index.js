/**
 * McCarthy 91 function
 * @param  {number} num
 * @return {number}
 */
const mcCarthy = (num) => {
  let res = 0;

  if (num > 100) {
    res = num - 10;
  } else {
    res = mcCarthy(mcCarthy(num + 11));
  }

  return res;
}

console.log(mcCarthy(71))