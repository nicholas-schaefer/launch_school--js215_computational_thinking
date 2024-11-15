function triangle(side1, side2, side3){
  const sortedSidesArray = [side1, side2, side3].sort((a,b) => a - b);

  if (sortedSidesArray[2] >= sortedSidesArray[0] + sortedSidesArray[1]) return 'invalid';
  const sidesSet = new Set(sortedSidesArray)
  const uniqueSidesCount = sidesSet.size

  switch (uniqueSidesCount){
    case 1: return 'equilateral';
    case 2: return 'isosceles'
    case 3: return 'scalene'
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"