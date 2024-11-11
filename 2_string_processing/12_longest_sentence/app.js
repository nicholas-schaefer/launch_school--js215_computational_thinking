let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  const regex1 = RegExp(/[\.\?\!]/, 'g');

  const endOfSentenceIndexes = []
  while ((regex1.exec(text)) !== null) {
    endOfSentenceIndexes.push(regex1.lastIndex)
  }

  const sentences = [];
  endOfSentenceIndexes.reduce((beginIndex, endIndex) => {
    sentences.push(text.slice(beginIndex, endIndex).trim());
    return endIndex;
  }, 0);

  const wordCountsWithSentences = sentences.map(sentence =>{
    return [wordCount(sentence), sentence];
  });

  const sortedWordCountsWithSentences = wordCountsWithSentences.sort((a, b) => {
    switch (true){
      case (a[0] === b[0]) : return 0;
      case (a[0] < b[0])   : return -1;
      case (a[0] > b[0])   : return 1;
    }
  })

  const largestSentence = {}
  largestSentence.wordCount = sortedWordCountsWithSentences.slice(-1)[0][0];
  largestSentence.text = sortedWordCountsWithSentences.slice(-1)[0][1];

  const msg = largestSentence.text + '\n\n' +
              `The longest sentence has ${largestSentence.wordCount} words.`
  return msg;
}

function wordCount(sentence) {
  const words = sentence.split(/\s+/);
  return words.length;
}

console.log(longestSentence(longText));