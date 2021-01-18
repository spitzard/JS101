function stringy(number) {
  let strArr = Array(number).fill(0);
  return strArr.map((_, idx) => {
    return idx % 2 === 0 ? 1 : 0;
  }).join("");
}

console.log(stringy(20));

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"