function sumSquareDifference(inputInt){
  const RANGE_MIN = 1

  const rangeArray = createRangeArray({min: RANGE_MIN, max: inputInt});
  const squareOfSums = calculateSquareOfSums(...rangeArray);
  const sumOfSquares = calculateSumOfSquares(...rangeArray);
  return squareOfSums - sumOfSquares
}

function createRangeArray({min, max}={}) {
  if (min > max) return;
  const difference = max - min;
  const sparseArray = new Array(difference + 1).fill(null)

  return sparseArray.map((_el, idx) => idx + 1);
}

function calculateSquareOfSums(...ints) {
  const sumOfInts = ints.reduce((sum, int) => sum + int, 0);
  return sumOfInts ** 2;
}

function calculateSumOfSquares(...ints) {
  const squaredInts = ints.map(int => int **2);
  return squaredInts.reduce((sum, int) => sum + int, 0);
}

// console.log(createRangeArray(1, 3));

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150