
function wordLengths(words) {
  if (words === undefined || words.length < 1) return [];
  else return words.split(" ").map(word => word.concat(" " + word.length));
}

const wordLengthsTwo = (...args) => {
  if (args.length === 0 || args[0].length === 0) {
    return [];
  }

  return args[0].split(" ").map(function(word) {
    return `${word} ${String(word.length)}`;
  });
};

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengthsTwo('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
