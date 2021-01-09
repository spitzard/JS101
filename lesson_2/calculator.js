const readline = require('readline-sync');

console.log('Welcome to Calculator!\n');

let number1 = Number(readline.question('\nWhat is your first number?\n'));

let number2 = Number(readline.question('What is your second number?\n'));

let operation = readline.question('What Operation would you like to perform?\n1.) Add\n2.) Subtract\n3.) Multiply\n4.) Divide\n');

let output;
if (operation === '1') {
  output = number1 + number2;
} else if (operation === '2') {
  output = number1 - number2;
} else if (operation === '3') {
  output = number1 * number2;
} else if (operation === '4') {
  output = number1 / number2;
}

console.log(`The result is: ${output}`);


