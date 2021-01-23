function wordSizes(words) {
  let wordSizes = {};
  let wordArray = words.replace(/[^a-z\s]/ig, "").split(" ");
  wordArray.forEach( function(word) {
    if (word.length > 0) {
      if (!wordSizes[word.length]) {
        wordSizes[word.length] = 1;
      } else wordSizes[word.length] += 1;
    }
  });
  return wordSizes;
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}