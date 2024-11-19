const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix){
  const newRowsCount = matrix[0].length;
  const newColumnsCount = matrix.length;
  const transposedMatrix = [];

  for (let idx2 = 0; idx2 < newRowsCount; idx2 +=1){
    const newRow = []
    for (let idx1 = 0; idx1 < newColumnsCount; idx1 +=1){
      newRow.push(structuredClone(matrix[idx1][idx2]))
    }
    transposedMatrix.push(newRow);
  }

  return transposedMatrix
}

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


// new index 0,1 0,2 0,3