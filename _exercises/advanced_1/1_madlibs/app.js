const fillerWords = {
  adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
}

const template2 = ()=>{
  const msg = `The ${getRandom('noun')} ${getRandom('verb')} the ${getRandom('noun')}'s ${getRandom('noun')}.`;
  return msg;
}

const template1 = ()=>{
  const msg =
    `The ${getRandom('adjective')} brown ${getRandom('noun')} ${getRandom('adverb')}'s` + '\n' +
    `${getRandom('verb')} the ${getRandom('adjective')} yellow` + '\n' +
    `${getRandom('noun')} who ${getRandom('adverb')} ${getRandom('verb')} his` + '\n' +
    `${getRandom('noun')} and looks around.`;
    return msg;
}

const madlibs = (template)=>{
  console.log(template.name)
  return template()
}

console.log(madlibs(template1));

// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

function getRandom(type){
  switch (type){
    case 'adjective': return randomArrayElement(fillerWords.adjectives);
    case 'noun': return randomArrayElement(fillerWords.nouns);
    case 'verb': return randomArrayElement(fillerWords.verbs);
    case 'adverb': return randomArrayElement(fillerWords.adverbs);
    default: return;
  }
}

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArrayIndex(inputArray){
  return randomInt(0, inputArray.length -1);
}

function randomArrayElement(inputArray){
  return inputArray[randomArrayIndex(inputArray)];
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

// madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".