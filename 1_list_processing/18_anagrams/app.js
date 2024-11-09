function anagram(word, list) {

  const sortStr = (str) => str.split('').sort().join('');

  const wordAlphabetized = sortStr(word);
  const listAlphabetizedWords = list.map((word) => sortStr(word));

  const matchedListIndexes =
    listAlphabetizedWords.reduce((arrayOfIndexMatches, listWord, idx)=>{
      (wordAlphabetized === listWord) && arrayOfIndexMatches.push(idx);
      return arrayOfIndexMatches
    },[])

  const transformIndexesToElements = ((arr, arrOfIndexes) => {
    return arrOfIndexes.map(matchedIndex => arr[matchedIndex])
  })

  const matchedWords = transformIndexesToElements(list, matchedListIndexes);

  return matchedWords;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]