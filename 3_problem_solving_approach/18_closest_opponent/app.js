//played yourself!!!!!!!!! doesn't work

function findClosestOpponent(positions, position) {
  const initialPositionsArray = Object.entries(positions);
  const livingPositionsArray = initialPositionsArray.filter(([_key, val]) => Number.isInteger(val));

  switch (livingPositionsArray.length){
    case 0: return null;
    case 1: return formatWinner(livingPositionsArray[0][0])
  }
  // console.log(livingPositionsArray)
  const clonedArray = [...livingPositionsArray];
  const absDifferenceArray = clonedArray.map(([key, val]) => [key, Math.abs(val-position)])
  // console.log(absDifferenceArray)
  const sortedArray = [...absDifferenceArray].sort((a, b)=> a[1] - b[1] );
  console.log(sortedArray)

  if (sortedArray[0][1] < sortedArray[1][1]) return positions[sortedArray[0][0]]

  const key1 = sortedArray[0][0];
  const key2 = sortedArray[1][0];
  const winner = positions[key1] > positions[key2] ? sortedArray[0][1] : sortedArray[1][1];
  return winner
  // if (positionsArray.length === 0) return null
  // return positionsArray
}

function formatWinner(winner){
  return `'${winner}'`
}

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100

console.log(findClosestOpponent({}, 74)); // null

console.log(findClosestOpponent({
  "Atlas" : 1,
  "Luna" : 15,
  "" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : null, "Opponent 1b" : 5, "Opponent 1c" : null,
  "Opponent 1d" : null, "Opponent 1e" : 200, "Opponent 1f" : 400
}, 300)); // 400