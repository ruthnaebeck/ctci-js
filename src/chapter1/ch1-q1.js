'use strict';

export function isUnique1(str){
  var chars = {};
  for(var i = 0; i < str.length; i++){
    if(chars[str[i]]) return false;
    else chars[str[i]] = str[i];
  }
  return true;
}

export function isUnique2(str){
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < str.length; j++){
      if(i === j) break;
      if(str[i] === str[j]) return false;
    }
  }
  return true;
}
