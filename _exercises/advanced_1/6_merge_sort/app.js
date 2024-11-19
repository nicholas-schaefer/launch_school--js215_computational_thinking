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

function mergeSort(arrToSort){
  return
  const initialArrayElementsCount = arrToSort.length;
  const requiredSplitsCount = Math.ceil(initialArrayElementsCount / 2);
  // console.log(requiredSplitsCount)


  // for (let splitCount = 1; splitCount <= requiredSplitsCount; splitCount+=1 ){
  //   console.log(splitCount)
  // }
  let clonedArr = structuredClone(arrToSort);

  while (true){
    if (clonedArr.every(el => el.length == 1)) break;
    clonedArr = halveArray(clonedArr);
  }
  console.log(clonedArr)

}

function halveArray(inputArray){
  if (inputArray.length === 1) return inputArray;
  const indexHalfFloored = Math.floor(inputArray.length/2)
  let firstHalf = inputArray.slice(0, indexHalfFloored);
  let secondHalf = inputArray.slice(indexHalfFloored);

  firstHalf = halveArray(inputArray);
  secondHalf = halveArray(inputArray);

  return merge(firstHalf,secondHalf);
}

const solution = halveArray([1,2,3,4,5,6]);
console.log(solution)
console.log(JSON.stringify(solution))

mergeSort([9, 5, 7, 1]);               // [1, 5, 7, 9]
mergeSort([5, 3]);                     // [3, 5]
mergeSort([6, 2, 7, 1, 4]);            // [1, 2, 4, 6, 7]
mergeSort([9, 2, 7, 6, 8, 5, 0, 1]); // [0, 1, 2, 5, 6, 7, 8, 9])

// merge_sort([9, 2, 7, 6, 8, 5, 0, 1])); // [0, 1, 2, 5, 6, 7, 8, 9])

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]