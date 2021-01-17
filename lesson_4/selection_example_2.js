let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [2, 8, 6, 14, 4, 12] mutated

// my implementation
function doubleNumbers(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    numbers[index] *= 2;
  }
}

// launschool implementation
/*
function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * 2;

    counter += 1;
  }

  return numbers;
}
*/