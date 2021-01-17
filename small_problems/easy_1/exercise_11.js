function asciiValue(string) {
  let asciiValue = 0;
  for (let index = 0; index < string.length; index += 1) {
    asciiValue += string.charCodeAt(index);
  }
  return asciiValue;
}


asciiValue('Four score');         // 984
console.log(asciiValue('Launch School'));      // 1251
asciiValue('a');                  // 97
console.log(asciiValue(''));                   // 0