'use strict';

// Solution works with current node and tracks current / previous node
export function removeDupes1(list){
  if(!list) return list;
  var arr = [];
  var cNode = list;
  var pNode = null;
  while(cNode){
    if(arr.indexOf(cNode.val) > -1){
      // remove node
      cNode = cNode.next;
      pNode.next = cNode;
    }else{
      // next
      arr.push(cNode.val);
      pNode = cNode;
      cNode = cNode.next;
    }
  }
}

// Solution works with currentNode and currentNode.next
export function removeDupes2(list){
  if(!list) return list;
  var cNode = list;
  var arr = [cNode.val];
  while(cNode.next){
    if(arr.indexOf(cNode.next.val) > -1){
      // replace next node
      cNode.next = cNode.next.next;
    }else{
      // next
      arr.push(cNode.next.val);
      cNode = cNode.next;
    }
  }
}

// No buffer allowed = No array
// Need to loop through list for each val
export function removeDupes3(list){
  if(!list) return list;
  var cNode = list;
  while(cNode){
    let pNode = cNode;
    let nNode = cNode.next;
    while(nNode){
      if(cNode.val === nNode.val) pNode.next = nNode.next;
      else pNode = nNode;
      nNode = nNode.next;
    }
    cNode = cNode.next;
  }
}

// Example:
// linkedList = {val: 5, next: {val: 5, next: {val: 5, next: null}}}
// linkedList = {val: 5, next: {val: 5, next: null}}
// linkedList = {val: 5, next: {val: 5, next: null}}
// linkedList = {val: 5, next: null}
