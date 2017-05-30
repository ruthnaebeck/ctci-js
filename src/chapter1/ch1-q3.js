'use strict';

export function urlify(str){
  if(!str || !str.length) return str;
  var arr = str.split('');
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === ' ') arr[i] = '%20';
  }
  return arr.join('');
}
