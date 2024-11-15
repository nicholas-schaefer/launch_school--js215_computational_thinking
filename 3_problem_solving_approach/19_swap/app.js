//way to hard

function swap(str) {
  const strLength = str.length;
  if (strLength === 0) return "";

  let startIdx = 0;
  let endIdx = strLength -1;

  const solutionArray = []

  const arrayOfChars = [...str];

  arrayOfChars.forEach(char, idx =>{


  })

  // console.log(str[startIdx], str[endIdx])
}



function isLetter(char){
  return /[A-Z]/i.test(char);
}

function isDigit(char){
  return /\d/.test(char);
}



function tests(){
  console.log(swap("1a2b3c") === "a1b2c3"); // true
  return

  console.log(swap("12a") === "a21"); // true
  console.log(swap("ab1") === "1ba"); // true
  console.log(swap("abcd") === "abcd"); // true
  console.log(swap("1") === "1"); // true
  console.log(swap("abcd123") === "123dabc"); // true

  console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
  console.log(swap("ab1CD23") === "12a3DbC"); // true

  console.log(swap("") === ""); // true
}
tests();