const REVERSE = 5;

function reverseWords(words) {
  let reverse = words.split(" ").map( function(word) {
    if (word.length >= REVERSE) {
      return word.split("").reverse().join("");
    } else return word;
  });
  return reverse.join(" ");
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"