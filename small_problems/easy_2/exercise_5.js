let readlineSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayCalculations(num1, num2) {
  prompt(`${num1} + ${num2} = ${num1 + num2}`);
  prompt(`${num1} - ${num2} = ${num1 - num2}`);
  prompt(`${num1} * ${num2} = ${num1 * num2}`);
  prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2).toFixed(0)}`);
  prompt(`${num1} % ${num2} = ${num1 % num2}`);
  prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
}


prompt("Enter the first number: ");
let firstNum = Number(readlineSync.question());

prompt("Enter the second number: ");
let secondNum = Number(readlineSync.question());

displayCalculations(firstNum, secondNum);
