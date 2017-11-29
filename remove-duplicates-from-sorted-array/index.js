/**
 * @param  {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums.length === 0) { return 0; }

  let i = 0;
  for (let j = 1, len = nums.length; j < len; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;


  // ES6 Set
  // return new Set(nums).size;
}
