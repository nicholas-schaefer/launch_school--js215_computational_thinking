const FACTOR = 7;
const LARGEST_POSSIBLE_FEATURED_NUMBER = 9876543201;
const ERROR_MSG = "There is no possible number that fulfills those requirements."

function featured(inputInt){
  if (inputInt >= LARGEST_POSSIBLE_FEATURED_NUMBER) return ERROR_MSG;

  let multipleToCheck = firstMultipleGreaterThanEqual(inputInt, FACTOR);

  if (isOdd(multipleToCheck)){
    if (isMultipleOf(multipleToCheck, FACTOR)) return multipleToCheck;
    return featured(inputInt + (FACTOR * 2))
  } else {
    return featured(inputInt + FACTOR);
  }
}

function isOdd(int){
  return int % 2 === 1;
}

function isMultipleOf(testInt, potentialFactor) {
  return testInt % potentialFactor === 0;
}

function firstMultipleGreaterThanEqual(testInt, multiple){
  if (testInt === multiple) return testInt;
  const remainder = (testInt % multiple);
  return testInt + multiple - remainder
}

function digitsOccurOnlyOnce(int){
  const arrayOfIntStrings = [...String(int)];
  const digitsCount = arrayOfIntStrings.length;
  const uniqueDigitsCount = new Set(arrayOfIntStrings).size;
  return digitsCount === uniqueDigitsCount;
}

// console.log(firstMultipleGreaterThanEqual(0, 7))



console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."