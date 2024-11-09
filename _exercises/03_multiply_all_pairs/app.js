const multiplyAllPairs = (arr1, arr2) => {
  return combinations(arr1, arr2)
    .map(pair => product(...pair))
    .sort((a, b) => a - b);
}

const combinations = (arr1, arr2) => {
  const arrayOfCombinations = []
  arr1.forEach((_elOuter, idxOuter, arrOuter) => {
    arr2.forEach((_elInner, idxInner, arrInner) => {
      arrayOfCombinations.push([arrOuter[idxOuter], arrInner[idxInner]]);
    })
  })
  return arrayOfCombinations;
}

const product = (...factors) => factors.length ? factors.reduce((product, factor) => factor * product, 1) : undefined;

// const solution = combinations([2, 4], [4, 3, 1, 2])
// console.log(solution)


const solution = multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
console.log(solution)
// console.log(idxOuter, elOuter);