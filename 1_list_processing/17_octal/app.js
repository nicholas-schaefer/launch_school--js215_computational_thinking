function octalToDecimal(numberString) {
  const arrayOfInts = numberString.split('').map((strInt) => Number(strInt));

  const  arrayOfSums = [...arrayOfInts].reverse().map((num, i)=> num * 8 ** i)
  return arrayOfSums.reduce((sumTotaled, sum)=> sumTotaled + sum, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9



// 233                          // octal
// = 2*8^2 + 3*8^1 + 3*8^0
// = 2*64  + 3*8   + 3*1
// = 128   + 24    + 3
// = 155                          // decimal