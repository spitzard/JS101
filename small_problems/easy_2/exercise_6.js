function penultimate(words) {
  return words.split(" ").reverse()[1];
}

function middleWord(words) {
  let wordsArr = words.split(" ");
  let middleIndex = (wordsArr.length - 1) / 2;
  console.log(wordsArr.length);

  if (wordsArr.length  <= 2) {
    console.log("Not enough words to determine middle");
    return false;
  }

  if (wordsArr.length % 2 === 0) {
    console.log("Even amount of words, no concrete middle can be found. Returning the two central words.");
    return wordsArr.slice(Math.floor(middleIndex), Math.ceil(middleIndex) + 1).join(" ");
  } else {
    return wordsArr.slice(middleIndex, middleIndex + 1).join("");
  }
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

console.log(middleWord("Launch School is great!") === "School is"); // logs true
console.log(middleWord("Launch School is super great!") === "is"); // logs true
console.log(middleWord("Launch School!") === "is"); // logs false