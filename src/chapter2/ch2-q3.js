'use strict';

// NOTE - List is not given
// EASY - Just replace given node with next
export function deleteNode(node){
  if(!node || !node.next) throw Error('Error');
  node.val = node.next.val;
  node.next = node.next.next;
}
