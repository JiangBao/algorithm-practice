/**
 * @param  {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let res = 0, len = nums.length;
  for (let i = 0; i < len; i++) {
    res ^= nums[i];
  }

  return res;

  // let map = {}, res;
  // for (let i = 0; i < nums.length; i++) {
  //   map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  // }
  // for (let i in map) {
  //   if (map[i] === 1) return parseInt(i);
  // }
}
