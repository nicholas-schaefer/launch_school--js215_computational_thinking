const substrings = (inputString) =>{
  const charsArray = [...inputString];
  const substringsArray = []

  while (charsArray.length > 0){
    substringsArray.push(...leadingSubstrings(charsArray.join('')));
    charsArray.splice(0,1);
  }

 return substringsArray
}

const leadingSubstrings = (inputString) => {
  return inputString.split('').reduce((arrayOfSubstrings, char) => {
    arrayOfSubstrings.push(arrayOfSubstrings.slice(-1) + char);
    return arrayOfSubstrings;
  }, []);
}

const solution = substrings('abcde');
console.log(solution)

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]