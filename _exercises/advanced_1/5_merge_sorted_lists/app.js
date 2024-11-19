function merge(arr1, arr2){
  const mergedArray = []

  const cloneArr1 = structuredClone(arr1);
  const cloneArr2 = structuredClone(arr2);

  while (cloneArr1.length > 0 || cloneArr2.length > 0){
    if (cloneArr1.length === 0) {mergedArray.push(cloneArr2.shift()); continue;}
    if (cloneArr2.length === 0) {mergedArray.push(cloneArr1.shift()); continue;}

    mergedArray.push(cloneArr1[0] < cloneArr2[0] ? cloneArr1.shift() : cloneArr2.shift());
  }
 return mergedArray;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// Left Right Winner resultArr
// 1    2     L      [].push(Left1)