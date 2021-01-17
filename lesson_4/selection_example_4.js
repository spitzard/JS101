let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiplyNumbers(myNumbers, 8));

// my implementation
function multiplyNumbers(numbers, multiplier) {
  let multipliedNumbers = [];
  for (let index = 0; index < numbers.length; index++) {
    let currentNum = numbers[index];
    multipliedNumbers.push(currentNum * multiplier);
  }
  return multipliedNumbers;
}

// launschool implementation
/*
function multiply(numbers, multiplier) {
  let multipliedNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];
    multipliedNums.push(currentNumber * multiplier);
  }

  return multipliedNums;
}
*/