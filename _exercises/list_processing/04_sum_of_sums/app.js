const sum = (...addends) => addends.reduce((sum, addend) => sum + addend);

const sumOfSums = (inputArr) => {
  const arraysToSum = inputArr.map((_el, idx, arr) => arr.slice(0, idx + 1));
  const arraysOfSums = arraysToSum.map(subArray => sum(...subArray));
  return sum(...arraysOfSums);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35