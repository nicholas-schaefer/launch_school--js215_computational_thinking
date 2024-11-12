function isValidLuhn(input){
  const regexNonDigits = /\D/g;
  const cleanedString = input.replace(regexNonDigits, '')
  // console.log(cleanedString)

  const intsArray = cleanedString.split('').map(el => parseInt(el, 10))
  const reversedIntsArray = [...intsArray].reverse();

  const doubledIntsArray = reversedIntsArray.map((el, idx)=>{
    const idxIsEven = idx % 2 === 0;
    if (idxIsEven) return el;
    const doubledInt = el * 2;
    return doubledInt >= 10 ? doubledInt - 9 : doubledInt;
  }).reverse()

  const sum = doubledIntsArray.reduce((sum, int) => sum + int, 0);
  return sum % 10 === 0;
}

function canWeAddADigit(input){
  const newLuhns = [];
  for (let i = 0; i < input.length; i+=1) {
    const potentialLuhn = input + String(i)
    if (isValidLuhn(potentialLuhn)) {
      newLuhns.push(potentialLuhn);
    }
  }

  return newLuhns.length !==0;
}


// console.log(isValidLuhn("2323 2005 7766 3554"))
function tests(){
  console.log(canWeAddADigit("2323 2005 7766 3554"));
  return
  //true given
  console.log(isValidLuhn('8763') === true);

  //false given simple
  console.log(isValidLuhn('1111') === false);

  //true need to clean chars
  console.log(isValidLuhn("2323 2005 7766 3554") === true);
  console.log(isValidLuhn("2323!!2005--- 7766  *& 3554") === true);
}
tests()

//