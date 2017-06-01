'use strict';

// Book solution slightly modified to return error or matrix

// Path for a 4 by 4 matrix
// 1st Iteration of 1st for loop:
  // 2nd for loop:
    // #1 - Change the 4 corners
    // #2 - Change #'s adjacent to 4 corners (R,U,L,D)
    // #3 - Change #'s adjacent to #'s in previous step
// 2nd Iteration of 1st for loop:
  // 2nd for loop:
    // #1 - Change the inner 4 corners

export function rotateMatrix(matrix){
  if(!matrix || !matrix.length) throw Error('Error');
  var len = matrix.length;
  for(var i = 0; i < len / 2; i++){
    let first = i;
    let last = len - 1 - i;
    for(var j = first; j < last; j++){
      let offset = j - first;
      let top = matrix[first][j]; // save top
      matrix[first][j] = matrix[last-offset][first]; // left -> top
      matrix[last-offset][first] = matrix[last][last-offset]; // bottom -> left
      matrix[last][last-offset] = matrix[j][last]; // right -> bottom
      matrix[j][last] = top; // top -> right
    }
  }
  return matrix;
}
