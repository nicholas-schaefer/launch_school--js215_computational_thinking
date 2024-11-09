const fact1 = 'JavaScript is fun';
const fact2 = 'Kids like it too';
const compoundSentence = [fact1, fact2.toLowerCase()].join(' and ');
// console.log(compoundSentence);
// console.log(fact1[0], fact2[0])

const pi = 22/7;
// console.log(pi.toString().lastIndexOf('14'))

const boxNumber = (356).toString();
console.log(boxNumber);

const backToNumber = parseInt(boxNumber, 10);
console.log(backToNumber);

const backToString = String(backToNumber);
console.log(backToString)