'use strict';

export function checkPerms1(str1, str2){
  if(str1.length !== str2.length) return false;
  var obj = {};
  for(let i = 0; i < str1.length; i++){
    let char = str1[i];
    let val = obj[char];
    if(val) obj[char]++;
    else obj[char] = 1;
  }
  for(let i = 0; i < str2.length; i++){
    let char = str2[i];
    let val = obj[char];
    if(val) obj[char]--;
    else return false;
  }
  return true;
}

export function checkPerms2(str1, str2) {
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  return str1 === str2;
}
