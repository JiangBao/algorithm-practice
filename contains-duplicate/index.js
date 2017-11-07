/**
 * @param  {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  let map = {}, len = nums.length;
  if (len <= 1) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    if (map.hasOwnProperty(nums[i])) {
      return true;
    } else {
      map[nums[i]] = 0;
    }
  }
  return false; 
}
