/**
 * @param  {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  const sum = nums.reduce((sum, num) => sum + num, 0);
  const len = nums.length;
  return (len * (len + 1)) / 2 - sum;
}
