//ALL WRONG +)

function myReduce(array, func, initial) {
  const arrayWithInitial = [...array];
  initial ?? arrayWithInitial.unshift(initial);

  const newArray = []

  for (let i = 0; i < arrayWithInitial.length -1; i+=1){
    newArray.push(func(arrayWithInitial[i], arrayWithInitial[i+1]));
  }
  return newArray;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

const solution1 = myReduce([5, 12, 15, 1, 6], smallest);           // 1
const solution2 = myReduce([5, 12, 15, 1, 6], sum, 10);            // 49

console.log(solution1);
console.log(solution2);

