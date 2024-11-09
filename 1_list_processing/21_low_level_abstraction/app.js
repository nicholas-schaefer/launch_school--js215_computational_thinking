function isAllUnique(string) {
  const normalizedString = string.replace(/\s/g, '').toLowerCase();

  const arrayOfChars = [...normalizedString];
  const characters = {}


  arrayOfChars.reduce((characters, char) => {
    characters[char] = (characters[char] ?? 0) + 1;
    if (characters[char] == 2) return false;
  },{})

  arrayOfChars.forEach((char)=>{
    characters[char] = (characters[char] ?? 0) + 1;
    if (characters[char] == 2) return false;
  })
  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true