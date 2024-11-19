const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

function createArrayOfEmptyArrays(innerArrayCount){
  return new Array(innerArrayCount).fill(null).map(el => []);
}

function rotate90(matrix){
  const originalRowsCount = matrix.length
  const originalColumnsCount = matrix[0].length;
  const rotatedRowsCount = originalColumnsCount;
  const rotatedColumnsCount = originalRowsCount;

  const rotatedMatrix = createArrayOfEmptyArrays(rotatedRowsCount);

  for (let rowIdx = 0 ; rowIdx < rotatedRowsCount; rowIdx += 1 ){
    for ( let columnIdx = rotatedColumnsCount -1; columnIdx >= 0; columnIdx -=1){
      rotatedMatrix[rowIdx].push(structuredClone(matrix[columnIdx][rowIdx]))
    }
  }
  return rotatedMatrix
}

// let firstIdx = rotatedColumnsCount -1; firstIdx >= 0; firstIdx -=1
// rotate90(matrix2)


// [3, 7, 4, 2],  00 01 02 03
// [5, 1, 0, 8],  10 11 12 13

// [5, 3],        10 00
// [1, 7],        11 01
// [0, 4],        12 02
// [8, 2],        13 03

// Original rows count   = Rotated max array length
// Original row0 length  = Count max array rows

// Step 1 create Array with correct number of empty arrays
// Step 2 populate arrays with new values

// Step 1
//   row0.length times push an empty array into transposed array

// Step2 matrix.length times push in subarrays
//   - within subarrays =>
//     outer loops matrixlength down until equal 0
//       inner loop 0 up until matrix[0] length exculsive
//       push transposedMatrix[inner].push[matrix[outer]]
