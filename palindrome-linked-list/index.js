/**
 * Definition for a singly-list
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param  {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  let fast = head, slow = head;

  while(fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // odd nodes
  if (fast != null) {
    slow = slow.next;
  }

  slow = reverse(slow);
  fast = head;

  while(slow != null) {
    if (fast.val !== slow.val) {
      return false;
    }

    fast = fast.next;
    slow = slow.next;
  }

  return true;
}

function reverse(head) {
  let prev = null;

  while(head != null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}