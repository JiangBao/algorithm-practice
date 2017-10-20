/**
 * @param  {number[][]}  nums
 * @param  {number} r
 * @param  {number} c
 * @return {number[][]}
 */
const matrixReshape = (nums, r, c) => {
  const preR = nums.length;
  const preC = nums[0].length;
  let result = [];

  if (preR*preC !== r*c) return nums;
  
  for (let i = 1; i < preR; i++) {
    nums[0].push.apply(nums[0], nums[i]);
  }
  while (nums[0].length) {
    result.push(nums[0].splice(0, c));
  }

  return result;
}
