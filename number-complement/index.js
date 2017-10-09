/**
 * @param  {number} num
 * @return {number}
 */
const findComplement = (num) => {
  let start = false;
  for (let i = 31; i >= 0; --i) {
    if (num & 1 << i) start = true;
    if (start) num ^= (1 << i);
  }

  return num;
}
