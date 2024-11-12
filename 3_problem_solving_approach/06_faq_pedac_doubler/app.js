function doubler(input) {
  const INVALID_INPUT_MSG = 'Invalid input';
  let inputType = getBetterType(input);
  let inputConvertedToArray;

  if (inputType === 'string') {
    inputConvertedToArray = input.split('')
    inputType = getBetterType(inputConvertedToArray);
  } else if (inputType === 'number') {
    if (positiveInteger(input)) {
      inputConvertedToArray = String(input).split('').map(char => parseInt(char, 10));
    } else {
      return INVALID_INPUT_MSG;
    }
  } else if (inputType === 'object') {
    inputConvertedToArray = [...Object.values(input)];
  } else if (inputType === 'array') {
    inputConvertedToArray = [arr.filter(Boolean)];
  } else {
    return INVALID_INPUT_MSG;
  }

  if (inputConvertedToArray.length === 0) return [];



  // let inputConvertedToArray;
  // if (inputType === 'string'){
  //   inputConvertedToArray = input.split('')
  //   inputType = ''
  // }
}

function positiveInteger(input) {
  return Number.isInteger(input) && input > 0;
}

function validInput(inputType, input) {
  if (inputType === 'array') {
    return input.length > 0;
  }
}

function getBetterType(input) {
  if (input === null) return 'null'
  if (Array.isArray(input)) return 'array'
  return typeof input
}


function testValidInput() {
  // non empty arrays are valid
  console.log(validInput('array', []) === false);
  console.log(validInput('array', ['hi']) === true);
}
// testValidInput()

function testGetBetterType() {
  //array
  console.log(getBetterType([]) === 'array');
  console.log(getBetterType(['hi']) === 'array');

  //object
  console.log(getBetterType({}) === 'object');
  console.log(getBetterType({ hi: 'there' }) === 'object');

  //string
  console.log(getBetterType('hello') === 'string');

  //number
  console.log(getBetterType(8) === 'number');
  console.log(getBetterType(Infinity) === 'number');

  //null
  console.log(getBetterType(null) === 'null');

  //undefined
  console.log(getBetterType(undefined) === 'undefined');

  //boolean
  console.log(getBetterType(true) === 'boolean');
  console.log(getBetterType(false) === 'boolean');
}
// testGetBetterType()

function testsDoubler() {
  // is a string, treat it as an array of characters
  // const stringToArrayOfChars = doubler('hello').join('') === 'hello';
  // console.log(stringToArrayOfChars);
}

// testsDoubler()