function rotateArray(input){
  if (!Array.isArray(input)) return;
  if (input.length === 0 ) return [];

  const copiedArr = [...input];
  const slicedFirstEl = copiedArr.shift();
  copiedArr.push(slicedFirstEl);
  return copiedArr;
}

function rotateRightmostDigits(inputIntToRotate, positionsToRotate){
  const stringToRotate = String(inputIntToRotate);
  const charCountLength = stringToRotate.length;
  const unchangedWordEndIndex = charCountLength - positionsToRotate;
  const unchangedWord = stringToRotate.slice(0, unchangedWordEndIndex);
  const wordToRotate = stringToRotate.slice(unchangedWordEndIndex);
  // console.log(stringToRotate, unchangedWord, wordToRotate)

  const rotatedString = rotateArray([...wordToRotate]).join('');
  const recombinedString = unchangedWord + rotatedString;
  return parseInt(recombinedString, 10);
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917