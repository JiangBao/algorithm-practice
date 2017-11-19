/**
 * @param  {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let a = 0, b = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    let m = a, n = b;
    a = n + nums[i];
    b = m > n ? m : n;
  }

  return a > b ? a : b;
}