/**
 * @param  {number[]} nums
 * @return {void} Do not return anything,modify nums in-place instead
 */
const moveZeroes = (nums) => {
  let count = 0, idx = 0, len = nums.length;
  for (let i = 0; i < len; i++) {
    !!nums[i] ? nums[idx++] = nums[i]: '';
  }
  for (let i = idx; i < len; i++) {
    nums[i] = 0;
  }
}
