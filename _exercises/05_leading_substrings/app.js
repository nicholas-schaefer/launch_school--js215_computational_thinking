const leadingSubstrings = (inputString) => {
  return inputString.split('').reduce((arrayOfSubstrings, char) => {
    arrayOfSubstrings.push(arrayOfSubstrings.slice(-1) + char);
    return arrayOfSubstrings;
  }, []);
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]