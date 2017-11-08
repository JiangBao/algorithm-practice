/**
 * Definition for singly-linked list
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param  {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let curr = head, prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}