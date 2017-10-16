/**
 * @param  {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead
 */
const nextPermutation = (nums) => {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    swap(nums, i, j);
  }

  reverse(nums, i + 1);

  return nums;
}

/**
 * @param  {number[]}  nums
 * @param  {number}    start
 */
const reverse = (nums, start, end = nums.length - 1) => {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

/**
 * 
 */
const swap = (nums, i, j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
