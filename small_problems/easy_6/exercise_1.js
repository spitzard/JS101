function repeater(string) {
  return string.split("").map(str => str.repeat(2)).join("");
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""