const firstName = 'nicholas';
const lastName = 'schaefer';
const fullName = [firstName, lastName].join(' ');

// console.log(fullName);
// console.log(firstName.concat(lastName));
// console.log(fullName.split(' '));

const language = 'JavaScript';

const idx = language.indexOf('S');
// console.log(idx);

const charCode = language.charCodeAt(idx);
// console.log(charCode)
// console.log(String.fromCharCode(charCode));
// console.log(language.lastIndexOf('a'))

let a = 'a';
let b = 'b';
// console.log(a > b);
b = 'B';
// console.log(a > b);

// console.log(language.slice(1,4));
// console.log(language.slice(2,4));

// console.log(language.substring(1,4));
// console.log(language.substring(2,4));

console.log(language.slice(1,-1));
console.log(language.slice(2,-2));

console.log(language.substring(1,-1));
console.log(language.substring(2,-2));