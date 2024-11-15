function myFilter(array, func) {
  const newArray = []
  array.forEach(el => func(el) && newArray.push(el));

  return newArray;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

const solution = myFilter([{ a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 }, { a: 1, b: 2, c: 3 },], isPythagoreanTriple);
console.log(solution);
// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]