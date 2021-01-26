const readlineSync = require('readline-sync');

function getNumber(ordinal) {
  return Number(readlineSync.question(`Enter the ${ordinal} number: `));
}

function contains(number, numbers) {
  if (numbers.includes(number)) {
    console.log(`The number ${number} appears in ${numbers.join(",")}.`);
  } else console.log(`The number ${number} does not appear in ${numbers.join(",")}.`);
}

function isGreater(number, numbers) {
  const greater = (element) => number > element;
  if (numbers.some(greater)) {
    console.log(`The number ${number} is greater than some number in ${numbers.join(",")}.`);
  } else console.log(`The number ${number} is not greater than any in ${numbers.join(",")}.`);
}

let fiveNumbers = [];

fiveNumbers.push(getNumber("1st"));
fiveNumbers.push(getNumber("2nd"));
fiveNumbers.push(getNumber("3rd"));
fiveNumbers.push(getNumber("4th"));
fiveNumbers.push(getNumber("5th"));
let last = getNumber("last");

contains(last, fiveNumbers);
isGreater(last, fiveNumbers);
