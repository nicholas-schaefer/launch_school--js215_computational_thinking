function bubbleSort(inputArray) {
  const inputArrayLength = inputArray.length;

  let flagFlipMade;
  do {
    flagFlipMade = false;
    for (let idx = 0; idx < inputArrayLength - 1; idx += 1) {
      const [currentIdx, nextIdx] = [idx, idx + 1];

      let currentEl = inputArray[currentIdx];
      let nextEl = inputArray[nextIdx];
      if (nextEl < currentEl) {
        inputArray[currentIdx] = nextEl;
        inputArray[nextIdx] = currentEl;
        flagFlipMade = true;
      }
    }
  } while (flagFlipMade);

  return inputArray;
}


const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]