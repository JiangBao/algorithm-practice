/**
 * @param  {number[]} nums1
 * @param  {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const len1 = nums1.length, len2 = nums2.length;
  let nums = len1 > len2 ? [...nums2] : [...nums1];
  let res = [];

  for (let i = 0, len = nums.length; i < len; i++) {
    const item = nums[i];
    const idx1 = nums1.indexOf(item);
    const idx2 = nums2.indexOf(item);
    if (idx1 !== -1 && idx2 !== -1) {
      res.push(item);
      nums1.splice(idx1, 1);
      nums2.splice(idx2, 1);
    }
  }

  return res;
}
