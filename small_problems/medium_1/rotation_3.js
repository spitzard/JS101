console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

function maxRotation(number) {
  let newNumber = number;
  let switchDigit = String(number).split("").length;
  while (switchDigit > 0) {
    newNumber = rotateRightmostDigits(newNumber, switchDigit);
    switchDigit--;
  }
  return newNumber;
}

function rotateRightmostDigits(number, count) {
  let numbers = String(number).split("");
  let digitIdx = numbers.length - count;
  return Number(numbers.filter((_, idx) => idx !==  digitIdx)
    .concat(numbers[digitIdx]).join(""));
}