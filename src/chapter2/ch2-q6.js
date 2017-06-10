'use strict';

export function palindrome(list){
  var arr = [];
  var cNode = list;
  while(cNode){
    arr.push(cNode.val);
    cNode = cNode.next;
  }
  var mid = Math.floor(arr.length / 2);
  var arr1 = [];
  var arr2 = [];
  for(var i = 0; i < arr.length; i++){
    if(i < mid) arr1.push(arr[i]);
    if(arr.length % 2 === 0){
      if(i >= mid) arr2.push(arr[i]);
    }else{
      if(i > mid) arr2.push(arr[i]);
    }
  }
  return arr1.join('') === arr2.reverse().join('');
}
