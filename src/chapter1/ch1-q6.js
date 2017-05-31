'use strict';

export function compress(str){
  if(!str) return str;
  var num = 1;
  var char = str[0];
  var result = '';
  for(var i = 1; i <= str.length; i++){
    if(str[i] === char){
      num++;
    }else{
      result += char + num;
      num = 1;
      char = str[i];
    }
  }
  return result.length < str.length ? result : str;
}
