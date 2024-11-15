// did not figure this out

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

function rotateStringLeft(input){
  return input.slice(1) + input[0]
}

function maxRotation(input){
  rotateStringLeft(String(input));
}

// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845