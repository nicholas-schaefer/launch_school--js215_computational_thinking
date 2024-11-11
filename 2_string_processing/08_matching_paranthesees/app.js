const isBalanced = (str) => {
  let onlyParentheses = str.replace(/[^\(\)]/g, '');
  const onlyParenthesesLength = onlyParentheses.length
  if (onlyParenthesesLength % 2 === 1) return false;
  console.log(onlyParentheses)


  for (let i = 0; i < onlyParenthesesLength /2; i+=1){
    console.log(onlyParentheses[i], onlyParentheses[onlyParenthesesLength -1 -i])
  }

}





console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false