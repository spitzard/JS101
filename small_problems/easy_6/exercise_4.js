function centerOf(string) {
  let center = (string.length - 1) / 2;
  if (isOdd(center)) {
    return string[center];
  } else return string[Math.floor(center)] + string[Math.ceil(center)];
}

function isOdd(number) {
  return number % 2 === 0;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));              // "x"