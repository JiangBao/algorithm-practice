/**
 * Definition for a binary tree node
 */
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param  {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  const len = nums.length;
  if (len === 0) {
    return null;
  }

  return trans(nums, 0, len - 1);
}

const trans = (nums, low, high) => {
  if (low > high) {
    return null;
  }

  const mid = Math.round((low + high) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = trans(nums, low, mid - 1);
  node.right = trans(nums, mid + 1, high);

  return node;
}