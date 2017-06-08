'use strict';

// Book solution working with 2 lists
export function partition(list, x){
  var smallList = null;
  var smallNode = null;
  var othList = null;
  var cNode = list;
  while(cNode){
    if(cNode.val < x){
      smallList = new ListNode(cNode.val, smallList);
      if(!smallNode) smallNode = smallList;
    }else{
      othList = new ListNode(cNode.val, othList);
    }
    cNode = cNode.next;
  }
  if(!smallNode) return list;
  smallNode.next = othList;
  return smallList;
}

function ListNode(value, next){
  this.val = value;
  this.next = next || null;
}
