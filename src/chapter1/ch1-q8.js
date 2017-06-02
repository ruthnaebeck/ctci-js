'use strict';

// Loops over the matrix twice
export function zeroMatrix1(matrix){
  if(!matrix) throw Error('Error');
  var rows = [];
  var cols = [];
  // Collects the zeros
  matrix.forEach((row, rIdx) =>{
    row.forEach((item, cIdx) =>{
      if(!item){
        rows.push(rIdx);
        cols.push(cIdx);
      }
    });
  });
  // Changes vales to zeros
  matrix.forEach((row, rIdx) =>{
    row.forEach((item, cIdx) =>{
      if(rows.indexOf(rIdx) > -1 || cols.indexOf(cIdx) > -1){
        matrix[rIdx][cIdx] = 0;
      }
    });
  });
  return matrix;
}
