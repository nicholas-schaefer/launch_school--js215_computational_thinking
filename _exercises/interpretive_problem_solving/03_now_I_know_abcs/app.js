//totally messed this one up

const CHAR_CODE_FROM = {
  'a': 97,
  'z': 122,
}

const COUNT_CHARS_IN_ALPHABET = 26;

function caesarEncrypt(input, rotationCount){
  [...input].map((char)=>{
    if (/[a-z]/.test(char)){
      const currentCharCode = char.charCodeAt(0)
      const nextCharCode = findNextInLoop('a'.charCodeAt(0), 'z'.charCodeAt(0), currentCharCode, rotationCount);
      console.log(String.fromCharCode(nextCharCode));
    }
    // if (/[^A-Za-z]/.test(char)) return char;

  })
}

function findNextInLoop(rangeMin, rangeMax, startInt, increaseInt){
  const difference = rangeMax - rangeMin
  const sum = startInt + increaseInt;
  const newInt = sum % rangeMax + rangeMin
  // console.log(difference, sum, newInt)
  return newInt;
}

caesarEncrypt('c', 0);

// findNextInLoop(10, 36, 35, 38);

// caesarEncrypt('b', 0);

// // simple shift
// caesarEncrypt('A', 0);       // "A"
// caesarEncrypt('A', 3);       // "D"

// // wrap around
// caesarEncrypt('y', 5);       // "d"
// caesarEncrypt('a', 47);      // "v"

// // all letters
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
// caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"