let readlineSync = require('readline-sync');


function sum(number) {
  let sum = 0;
  for (let num = 0; num <= number; num++) {
    sum += num;
  }
  return sum;
}

function multiply(number) {
  let product = 1;
  for (let num = 1; num <= number; num++) {
    product *= num;
  }
  return product;
}

console.log("Please enter an integer greater than 0: ");
let userNumber = Number(readlineSync.question());

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let userChoice = readlineSync.question();

while (true) {
  if (userChoice === 's') {
    let sumTotal = sum(userNumber);
    console.log(`The sum of the integers between 1 and ${userNumber} is ${sumTotal}.`);
    break;
  } else if (userChoice === 'p') {
    let product = multiply(userNumber);
    console.log(`The product of the integers between 1 and ${userNumber} is ${product}.`);
    break;
  } else {
    console.log('Unkown input. Please try again.');
    userChoice =  readlineSync.question();
  }
}