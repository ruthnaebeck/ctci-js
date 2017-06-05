'use strict';

// Solution counts the nodes
// then finds the kth to the last node
export function kToLast1(list, k){
  if(!list) throw Error('Error');
  var count = 0;
  var cNode = list;
  while(cNode.next){
    count++;
    cNode = cNode.next;
  }
  if(count < k) throw Error('Error');
  var x = count - k;
  cNode = list;
  while(x){
    cNode = cNode.next;
    x--;
  }
  return cNode.val;
}
