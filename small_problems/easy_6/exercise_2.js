const VOWELS = ['a','e','i','o','u'];

function doubleConsonants(string) {
  let letters = string.split("");
  let doubled = letters.map(char => {
    if (isValid(char)) {
      return char.repeat(2);
    } else return char;
  });
  return doubled.join("");
}

function isValid(char) {
  char = char.toLowerCase();
  return char  >= 'a' && char  <= 'z' && !VOWELS.includes(char);
}


doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
