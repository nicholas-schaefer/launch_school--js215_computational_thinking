function transactionsFor(itemId, transactions) {
  return transactions.filter(({id}) => id === itemId);
}

function isItemAvailable(itemId, transactions) {
  // console.log(transactionsFor(itemId, transactions))
  const finalQuantity = transactionsFor(itemId, transactions).reduce((finalQuantity, {quantity, movement})=> {
    const difference = (movement === 'in') ? quantity : -quantity;
    return finalQuantity + difference;
  }, 0);
  return finalQuantity > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true