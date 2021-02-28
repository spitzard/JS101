function isUppercase(string) {
  return string.toUpperCase() === string;
}

function isUppercaseTwo(string) {
  return string.split("").every(isNotLowercase);
}

function isNotLowercase(char) {
  return !(char >= 'a' && char < "z");
}


console.log(isUppercaseTwo('t'));               // false
console.log(isUppercaseTwo('T'));               // true
console.log(isUppercaseTwo('Four Score'));      // false
console.log(isUppercaseTwo('FOUR SCORE'));      // true
console.log(isUppercaseTwo('4SCORE!'));         // true
console.log(isUppercaseTwo(''));                // true