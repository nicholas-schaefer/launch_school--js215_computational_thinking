const buyFruit = (cart) => {
  return cart.reduce((acc, [fruit, quantity]) => {
    const fruits = Array(quantity).fill(fruit)
    acc.push(...fruits);
    return acc;
  }, []);
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]