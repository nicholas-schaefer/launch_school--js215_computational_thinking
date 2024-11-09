const substrings = (inputString) => {
  const charsArray = [...inputString];
  const substringsArray = []

  while (charsArray.length > 0) {
    substringsArray.push(...leadingSubstrings(charsArray.join('')));
    charsArray.splice(0, 1);
  }

  return substringsArray
}

const leadingSubstrings = (inputString) => {
  return inputString.split('').reduce((arrayOfSubstrings, char) => {
    arrayOfSubstrings.push(arrayOfSubstrings.slice(-1) + char);
    return arrayOfSubstrings;
  }, []);
}

const isPalindrome = (inputString)=>{
  const inputStringLength = inputString.length;
  if (inputStringLength.length === 1) return false;

  const halfLengthFloor = Math.floor(inputStringLength/2);
  const [firstHalf, secondHalf] = [inputString.slice(0, halfLengthFloor), inputString.slice(-halfLengthFloor)]
  const secondHalfReversed = [...secondHalf].reverse().join('');

  return firstHalf === secondHalfReversed
}

const palindromes = (inputString) => {
  return substrings(inputString).filter((substring)=>{
    return isPalindrome(substring)
  })
}

function app() {
  // console.log(palindromes('abcd'));       // []
  // return
  console.log(palindromes('madam'));      // [ "madam", "ada" ]
  // return

  console.log(palindromes('hello-madam-did-madam-goodbye'));
  // returns
  // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  //   "-madam-", "madam", "ada", "oo" ]

  console.log(palindromes('knitting cassettes'));
  // returns
  // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
}
app()