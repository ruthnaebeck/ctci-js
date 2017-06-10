'use strict';

export function addLL(list1, list2){
  if(!list1 || !list2) return false;
  var carry = 0;
  var cNode1 = list1;
  var cNode2 = list2;
  var newList;
  var nNode;
  while(cNode1 || cNode2){
    let sum = carry;
    if(cNode1) sum += cNode1.val;
    if(cNode2) sum += cNode2.val;
    if(sum > 9){
      carry = 1;
      sum -= 10;
    }else{
      carry = 0;
    }
    if(newList){
      nNode.next = new ListNode(sum);
      nNode = nNode.next;
    }else{
      newList = new ListNode(sum);
      nNode = newList;
    }
    if(cNode1) cNode1 = cNode1.next;
    if(cNode2) cNode2 = cNode2.next;
  }
  if(carry) nNode.next = new ListNode(carry);
  return newList;
}

function ListNode(value){
  this.val = value;
  this.next = null;
}
