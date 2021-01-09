const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let nextCalculation = true;
let answer = "";
let language = "EN";


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function newCalculation(answer) {
  switch (answer) {
    case 'y':
      return true;
    case 'n':
      prompt(MESSAGES[language].goodbye);
      return false;
    default:
      prompt(MESSAGES[language]["invalid close"]);
      answer = readline.question();
      return newCalculation(answer);
  }
}

prompt(MESSAGES["INT"].setup);
language = readline.question();
if (!(MESSAGES["INT"].languages.includes(language))) {
  language = "EN";
}


while (nextCalculation) {

  prompt(MESSAGES[language].welcome);

  prompt(MESSAGES[language].number1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[language]["invalid number"]);
    number1 = readline.question();
  }
  prompt(MESSAGES[language].number2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[language]["invalid number"]);
    number2 = readline.question();
  }

  prompt(MESSAGES[language].operator);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES[language]["invalid operator"]);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${MESSAGES[language].result} ${output}`);

  prompt(MESSAGES[language].continue);
  answer = readline.question();
  nextCalculation = newCalculation(answer);
}
