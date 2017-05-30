'use strict';

export function permOfPalindrome(str){
  if(!str) return false;
  var obj = {};
  for(var i = 0; i < str.length; i++){
    let char = str[i];
    if(char !== ' '){
      let val = obj[char];
      if(val) obj[char]++;
      else obj[char] = 1;
    }
  }
  var count = 0;
  for(var key in obj){
    if(obj[key] % 2 !== 0) count++;
  }
  return count < 2;
}
