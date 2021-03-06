/**
 * Definition for singly-linked list
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param  {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let fast = head, slow = head;

  while (fast !== null && slow !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) return true;
  }

  return false;
}