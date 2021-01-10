const MONTHS_IN_A_YEAR = 12;
let readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(inputNumber, caseToCheck) {
  switch (caseToCheck) {
    case 'loan':
      return  inputNumber.trimStart() === '' || isNaN(inputNumber) || Number(inputNumber) < 1;
    case 'duration':
      return  inputNumber.trimStart() === '' || isNaN(inputNumber) || Number(inputNumber) < 0;
    case 'APR':
      return  inputNumber.trimStart() === '' || isNaN(inputNumber) || Number(inputNumber) < 0;
  }
  console.log('isInvalidNumber is missing the second input argument.');
  return null;
}

function convertYearsToMonths(durationInYears) {
  return Number(durationInYears) * MONTHS_IN_A_YEAR;
}

function yearlyToMonthlyInterest(APR) {
  return (Number(APR) / MONTHS_IN_A_YEAR / 100);

}

function monthlyPayment(loan, rate, duration) {
  if (rate > 0) {
    return  Number(loan) * (rate / (1 - Math.pow((1 + rate), (-duration))));
  } else {
    return Number(loan) / duration;
  }
}

/////////////////////////////////////////////////////////////////

prompt('Welcome to Mortgage Calculator 20XX\n');
while (true) {
  prompt('Please enter your loan amount ($):');
  let loanAmount = readline.question();

  while (isInvalidNumber(loanAmount,'loan')) {
    prompt('Unexpceted value. Please enter a loan amount greater than zero ($)');
    loanAmount = readline.question();
  }

  prompt('Please enter your annual percentage rate (APR) (%):');
  let annualPercentageRate = readline.question();

  while (isInvalidNumber(annualPercentageRate ,'APR')) {
    prompt('Unexpceted value. Please enter annual percentage rate (APR) (%), must not be negative.');
    annualPercentageRate  = readline.question();
  }

  prompt('Please enter the duration of your loan (years):');
  let loanDurationInYears  = readline.question();

  while (isInvalidNumber(loanDurationInYears, 'duration')) {
    prompt('Unexpceted value. Please enter a loan duration greater than zero (years)');
    loanDurationInYears = readline.question();
  }

  let months = convertYearsToMonths(loanDurationInYears);
  let monthlyInterest = yearlyToMonthlyInterest(annualPercentageRate);
  let payment = monthlyPayment(loanAmount, monthlyInterest, months);

  prompt(`Your monthly payment is $ ${payment.toFixed(2)}.`);
  prompt("Do you want to perform another calculation? y/n");
  let additionalCalculation = readline.question().toLowerCase();

  while (additionalCalculation !== 'y' && additionalCalculation !== 'n') {
    prompt("Unexpected input. Do you want to perform another calculation? y/n");
    additionalCalculation = readline.question().toLowerCase();
  }

  if (additionalCalculation === 'n') {
    break;
  }
}
