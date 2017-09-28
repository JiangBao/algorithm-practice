/**
 * definition for singly-linked list
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param  {ListNode}  l1
 * @param  {ListNode}  l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let list = new ListNode(0),
      result = list,
      curr;
  
  while(l1 !== null && l2 !== null) {
    curr = result.next || new ListNode(0);
    result.next = curr;
    curr.val += (l1 && l1.val || 0);
    curr.val += (l2 && l2.val || 0);
    if(curr.val > 9) {
      cur.val -= 10;
      curr.next = new ListNode(1);
    }
    result = curr;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  result = list.next;
  return result;
}
