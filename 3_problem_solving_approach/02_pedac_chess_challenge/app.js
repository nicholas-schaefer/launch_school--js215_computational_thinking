const PIECES = {whiteQueen: 'W', blackQueen: 'B'};

const boardSize = 7
const BOARD = [
  "________",
  "________",
  "___W____",
  "________",
  "________",
  "______B_",
  "________",
  "________",
]

const DIAGONAL_INDEXES = generateDiagonals(boardSize);

function coordinateDiagonals(row, col) {
  const solutionArray = DIAGONAL_INDEXES.filter(diagonal => {
    return diagonal.some(([valid_row, valid_col]) => {
      return valid_row == row == 1 && valid_col == col;
    })
  })
  return solutionArray.length === 0 ? null : solutionArray
}

function anyLineIncludesBothPieces(arrayOfLines, piece1, piece2){
  return arrayOfLines.some(lineArray=>{
    return lineArray.includes(piece1) && lineArray.includes(piece2)
  })
}

function lineIncludesBothPieces(lineArray, piece1, piece2){
  return lineArray.includes(piece1) && lineArray.includes(piece2)
}

function getDiagonalLines(row, col){
  const diagonals = coordinateDiagonals(row, col).map(diagonal =>{
    return diagonal.map(coordinates =>{
      return BOARD[coordinates[0]][coordinates[1]];
    })
  })

  return diagonals
}

const diagonalLines = getDiagonalLines(2, 4)
const solution = anyLineIncludesBothPieces(diagonalLines, PIECES.whiteQueen, PIECES.blackQueen);
console.log(solution)

function generateDiagonals(size) {
  const diagonalsLeftToRight = generateDiagonalsLeftToRight(size)
  const diagonalsRightToLeft = generateDiagonalsRightToLeft(size);
  const diagonals = diagonalsLeftToRight.concat(diagonalsRightToLeft)

  return diagonals
}

function generateDiagonalsLeftToRight(size) {
  const diagonals = [];

  for (let i = 0; i <= size; i += 1) {
    const diagonal = []
    for (let j = 0; j <= size - i; j += 1) {
      diagonal.push([j, j + i])
    }
    if (diagonal.length <= 1) continue;
    diagonals.push(diagonal)
    if (diagonal[0][0] === diagonal[0][1]) continue;
    const reversedDiagonal = [...diagonal].map(coordinate => [...coordinate].reverse())
    diagonals.push(reversedDiagonal)
  }
  return diagonals
}

function generateDiagonalsRightToLeft(size) {
  const diagonals = [];

  for (let i = size; i >= 0; i -= 1) {
    const diagonal = []
    for (let j = i; j >= 0; j -= 1) {
      diagonal.push([i - j, j])
    }
    if (diagonal.length <= 1) continue;
    diagonals.push(diagonal)
  }

  diagonals.shift() // don't need first result twice, will get it again below

  for (let i = 0; i <= size; i += 1) {
    const diagonal = []
    for (let j = size; j >= i; j -= 1) {
      // console.log([size - j + i, j])
      diagonal.push([size - j + i, j])
    }
    // console.log('---')
    if (diagonal.length <= 1) continue;
    diagonals.push(diagonal)
  }

  return diagonals

}

generateDiagonals(boardSize)