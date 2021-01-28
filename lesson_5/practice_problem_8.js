const VOWELS = ['a', 'e', 'i', 'o', 'u'];

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

function vowels(obj) {
  return Object.values(obj).map(words => {
    return words.map(str => str.split("").filter(char => VOWELS.includes(char)));
  });
}

console.log(vowels(obj));
