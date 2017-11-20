/**
 * Definition for singly-linked list
 */
function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * @param  {ListNode} l1
 * @param  {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  let helper = {};
  if (l1.val < l2.val) {
    helper = l1;
    helper.next = mergeTwoLists(l1.next, l2);
  } else {
    helper = l2;
    helper.next = mergeTwoLists(l1, l2.next);
  }

  return helper;
}