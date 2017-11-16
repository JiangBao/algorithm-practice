/**
 * Definition for a binary tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param  {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  return isMirror(root, root);
}

/**
 * @param  {TreeNode} t1
 * @param  {TreeNode} t2
 * @return {boolean}
 */
function isMirror(t1, t2) {
  if (t1 === null && t2 === null) { return true; }
  if (t1 === null || t2 === null) { return false; }
  return (t1.val === t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
}