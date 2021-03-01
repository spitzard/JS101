function rotateRightmostDigits(number, count) {
  let numbers = String(number).split("");
  let digitIdx = numbers.length - count;
  return Number(numbers.filter((_, idx) => idx !==  digitIdx)
    .concat(numbers[digitIdx]).join(""));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

