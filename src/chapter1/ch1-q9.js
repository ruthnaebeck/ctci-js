'use strict';

// Solution without the use of substring
export function strRotation1(s1, s2){
  if(!s1 || !s2) throw Error('Error');
  var s2start = s2.indexOf(s1[0]);
  if(s2start === -1) return false;
  var s1curr = 1;
  for(var i = s2start + 1; i < s2.length; i++){
    if(s2[i] === s1[s1curr]){
      s1curr++;
    }else if(s2.split('').slice(i).indexOf(s1[0]) > - 1){
      i = s2.split('').slice(i).indexOf(s1[0]);
      s2start = i;
    }else{
      return false;
    }
  }
  for(i = 0; i < s2start; i++){
    if(s2[i] === s1[s1curr]) s1curr++;
    else return false;
  }
  return true;
}

// Solution from book
export function strRotation2(str1, str2) {
  if (!str1 || !str2) throw new Error('Error');
  if (str1.length !== str2.length) return false;
  // double up original string and look for rotated string
  return isSubstring(str1 + str1, str2);
}

function isSubstring(str, substr) {
  return str.includes(substr);
}
