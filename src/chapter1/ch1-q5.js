'use strict';

// Separated Insert / Remove and Replace
export function oneAway1(str1, str2){
  if(str1 === str2) return true;
  if(Math.abs(str1.length - str2.length) > 1) return false;
  var arr1 = str1.split('');
  var arr2 = str2.split('');
  var num = Math.max(arr1.length, arr2.length);
  var diff = 0;
  if(arr1.length - arr2.length){
    // Insert / Remove operation
    for(let i = 0; i < num; i++){
      if(arr1[i] !== arr2[i]){
        diff++;
        if(arr1.length > arr2.length) arr1.splice(i, 1);
        else arr2.splice(i, 1);
      }
      if(diff > 1) return false;
    }
  }else{
    // Replace operation
    for(let i = 0; i < num; i++){
      if(arr1[i] !== arr2[i]) diff++;
      if(diff > 1) return false;
    }
  }
  return true;
}

// Combined Insert / Remove and Replace
export function oneAway2(str1, str2){
  if(str1 === str2) return true;
  if(Math.abs(str1.length - str2.length) > 1) return false;
  var arr1 = str1.split('');
  var arr2 = str2.split('');
  var num = Math.max(arr1.length, arr2.length);
  var diff = 0;
  var len = arr1.length - arr2.length;
  for(var i = 0; i < num; i++){
    if(len){
      // Insert / Remove operation
      if(arr1[i] !== arr2[i]){
        diff++;
        if(len > 0) arr1.splice(i, 1);
        else arr2.splice(i, 1);
      }
    }else{
      // Replace operation
      if(arr1[i] !== arr2[i]) diff++;
    }
    if(diff > 1) return false;
  }
  return true;
}
