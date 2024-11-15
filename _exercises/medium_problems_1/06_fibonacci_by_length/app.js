function makeFibonnaciGenerator(){
  let elCounter = 0n;
  let previous_fib;
  let next_fib;

  return function (){
    elCounter +=1n
    switch (elCounter){
      case 1n:
        previous_fib = 1n;
        return 1n;
      case 2n:
        next_fib = 1n;
        return 1n;
    }
    const sum = previous_fib + next_fib;
    [previous_fib, next_fib] = [next_fib, sum]
    return sum
  }
}

function getNthFibonnaci(nth){
  const numberToFind = (nth === Infinity) ? Infinity : BigInt(nth);
  const fibFinder = makeFibonnaciGenerator();

  for (let _i = 0; _i < numberToFind; _i+=1){
    const fibObject = fibFinder();
    console.log(fibObject)
  }
}

function findFibonacciIndexByLength(maxDigitsLength){
  const fibGenerator = makeFibonnaciGenerator();

  let fibIndex = 0n
  while(true){
    fibIndex += 1n;
    const digitsLength = String(fibGenerator()).length
    if (digitsLength == maxDigitsLength) break;
  }
  return fibIndex

}

// findFibonacciIndexByLength(3n)

// const fib1 = makeFibonnaciGenerator();
// console.log(fib1());
// console.log(fib1());
// console.log(fib1());
// console.log(fib1());
// console.log(fib1());
// console.log(fib1());
// console.log(fib1());





console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.