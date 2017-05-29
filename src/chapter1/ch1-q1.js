'use strict';

// Use an object O(n)
export function isUnique1(str){
  var chars = {};
  for(var i = 0; i < str.length; i++){
    if(chars[str[i]]) return false;
    else chars[str[i]] = str[i];
  }
  return true;
}

// Use nested for loops O(n2)
export function isUnique2(str){
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < str.length; j++){
      if(i === j) break;
      if(str[i] === str[j]) return false;
    }
  }
  return true;
}

// Could also use sort
export function isUnique3(str){
  var arr = str.split('').sort();
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === arr[i+1]) return false;
  }
  return true;
}
