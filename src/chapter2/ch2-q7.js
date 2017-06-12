'use strict';

// Loop over both lists to find the intersecting node
// Time O(m x n)
export function intersection(list1, list2){
  var cNode1 = list1;
  while(cNode1){
    let cNode2 = list2;
    while(cNode2){
      if(cNode1 === cNode2) return cNode1;
      cNode2 = cNode2.next;
    }
    cNode1 = cNode1.next;
  }
}
