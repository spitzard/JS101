let myNumbers = [1, 4, 3, 7, 2, 6];
doubleOddIndices(myNumbers);
console.log(myNumbers); // 1 8 3 14 2 12

// my implementation
function doubleOddIndices(numbers) {
  let index = 0;
  while (index < numbers.length) {
    if (index % 2 !== 0) {
      numbers[index] *= 2;
    }
    index += 1;
  }
}


// launchschool implementation
/*
function doubleNumsWithOddIndices(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}
*/