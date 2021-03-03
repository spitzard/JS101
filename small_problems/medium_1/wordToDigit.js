const NUMBERS_ALPHABETIC = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(phrase) {
  return phrase.replace(/\./ig, ' .').split(" ").map(word => {
    if (NUMBERS_ALPHABETIC.includes(word)) {
      return NUMBERS_ALPHABETIC.findIndex(num => num === word).toString();
    } else return word;
  }).join(" ").replace(/ \./ig, '.');
}

// elegant solution after Sam
function wordToDigitEX(phrase) {
  NUMBERS_ALPHABETIC.forEach((num, idx) => {
    while (phrase.includes(num)) phrase = phrase.replace(num, idx.toString());
  });
  return phrase;
}


function wordToDigitLS(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}


let sentence = wordToDigit('Please call me at five five five one two three four. Thanks.');
let sentence2 = wordToDigitLS('Please call me at five five five one two three four. Thanks.');
let sentence3 = wordToDigitEX('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4 . Thanks ."
console.log(sentence === "Please call me at 5 5 5 1 2 3 4. Thanks.");
console.log(sentence2 === "Please call me at 5 5 5 1 2 3 4. Thanks.");
console.log(sentence3 === "Please call me at 5 5 5 1 2 3 4. Thanks.");


// guided solution

