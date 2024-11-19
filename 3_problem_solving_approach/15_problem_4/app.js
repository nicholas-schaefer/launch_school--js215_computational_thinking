function convertFromShortHand(shortHand){
  if (typeof shortHand !== 'string') return
  const shortHandArray =shortHand.split(/', '/);
  return shortHandArray
};

function keepOnlyFirstDigit(inputStr){
  const inputInt = parseInt(inputStr, 10);
  if (inputInt < 10) return 0
  const log10 = 10 ** Math.floor(Math.log10(inputInt));
  return log10 * Math.floor(inputInt / log10)
}

function integerDistanceToEndRange(inputStr){
  const digitCount = inputStr.length;
  // if (digitCount === 1) return 0
  return 10 ** digitCount;
}

function calculateRangeEnd(rangeBeginningStr, shorthandRangeEndStr){
  rangeBeginningInt = parseInt(rangeBeginningStr,10);
  rangeEndInt = parseInt(shorthandRangeEndStr,10);

  if (rangeBeginningInt < rangeEndInt ) return rangeEndInt;
  const firstDigitKeptInt = keepOnlyFirstDigit(rangeBeginningStr);
  const distanceToRangeEndInt = integerDistanceToEndRange(shorthandRangeEndStr);
  const rangeEnd = firstDigitKeptInt + distanceToRangeEndInt + rangeEndInt;
  // return[rangeEnd, firstDigitKeptInt, distanceToRangeEndInt, rangeEndInt]
  return rangeEnd
}

function createInclusiveRange({min, max}){
  const range = []
  for (let i = min; i<= max; i +=1 ){
    range.push(i);
  }
  return range;
}

function tests(){

  // testsCalculateRangeEnd()
  // return

  console.log(convertFromShortHand("1, 3, 7, 2, 4, 1"));  // [1, 3, 7, 12, 14, 21]
  console.log(convertFromShortHand("1-3, 1-2"));          // [1, 2, 3, 11, 12]
  console.log(convertFromShortHand("1:5:2"));             // [1, 2, 3, 4, 5, 6, ... 12]
  console.log(convertFromShortHand("104-2"));             // [104, 105, ... 112]
  console.log(convertFromShortHand("104-02"));            // [104, 105, ... 202]
  console.log(convertFromShortHand("545, 64:11"));        // [545, 564, 565, .. 611]

  return
  console.log(convertFromShortHand(null));                // undefined
};
tests()

function testsCalculateRangeEnd(){
  console.log(calculateRangeEnd('1', '3') == 3);
  console.log(calculateRangeEnd('1', '5') == 5);
  console.log(calculateRangeEnd('104', '2') == 112);
  console.log(calculateRangeEnd('104', '02') == 202);
  console.log(calculateRangeEnd('564', '11') == 611);
}

