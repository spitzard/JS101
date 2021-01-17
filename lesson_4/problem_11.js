let statement = "The Flintstones Rock";

function letterFrequency(text) {
  let freqObj = {};
  text.replace(/\s/g,'').split('').forEach(letter => {
    if (freqObj.hasOwnProperty(letter)) {
      freqObj[letter] += 1;
    } else {
      freqObj[letter] = 1;
    }
  });
  return freqObj;
}

console.log(letterFrequency(statement));

// or  instead of replace use a .filter(letter => letter !== ' ')