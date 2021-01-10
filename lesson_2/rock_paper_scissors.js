const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'papers')) {
    prompt('You win!');
  } else if ((choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock') ||
            (choice === 'rock' && computerChoice === 'papers')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.ceil((Math.random() * VALID_CHOICES.length));
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer === 'n') break;
}