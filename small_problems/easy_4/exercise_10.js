function swap(statement) {
  let words = statement.split(" ");

  for (let idx = 0; idx <= words.length - 1; idx += 1) {
    let word = words[idx].split("");
    if (word.length > 1) {
      let first = word.pop();
      let last = word.shift();
      word.unshift(first);
      word.push(last);
      words[idx] = word.join("");
    }
  }
  return words.join(" ");
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"