//messed up
function vignereCipher(plainText, keyword){
  const keywordLength = keyword.length;

  let letterCharIndexCounter = 0;

  [...plainText].map((char)=>{
    if (!isLetter(char)) return char;
    const shiftChar = keyword[letterCharIndexCounter % keywordLength];
    const shiftCount = calculateShiftValue(shiftChar);
    const shiftedIndex = (calculateShiftValue(char) + shiftCount) % 26
    const shifted
    console.log(shiftedIndex)
    letterCharIndexCounter+=1;
  })
}

function isLetter(char){
  return /[A-Za-z]/.test(char);
}

function calculateShiftValue(char){
  if (/[a-z]/.test(char)) return  char.charCodeAt(0) - 'a'.charCodeAt(0);
  if (/[A-Z]/.test(char)) return char.charCodeAt(0) - 'A'.charCodeAt(0);
}

vignereCipher("Pineapples don't go on pizzas!", 'meat');


// calculateShiftValue('A');
// calculateShiftValue('B');
// calculateShiftValue('Z');