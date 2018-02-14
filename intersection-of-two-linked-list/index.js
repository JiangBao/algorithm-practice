/*
 * intersection of two linked list
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-14 12:05:00
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-14 15:57:26
 */

/**
 * Defnition for singly-linked list
 */
function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * @param  {ListNode} headA
 * @param  {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  let lenA = getLength(headA), lenB = getLength(headB);

  while (lenA > lenB) {
    headA = headA.next;
    lenA--;
  }

  while (lenA < lenB) {
    headB = headB.next;
    lenB--;
  }

  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
}

/**
 * get length of linked list
 * @param  {ListNode} listNode
 * @return {number}
 */
function getLength (listNode) {
  let length = 0;
  
  while (listNode !== null) {
    listNode = listNode.next;
    length++;
  }

  return length;
}
