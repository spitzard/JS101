const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (computerWins(choice, computerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function playerWins(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'lizard' && computerChoice === 'spock')) {
    return true;
  } else {
    return false;
  }
}

function computerWins(choice, computerChoice) {
  if ((choice === 'paper' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'rock') ||
      (choice === 'rock' && computerChoice === 'paper') ||
      (choice === 'spock' && computerChoice === 'lizard') ||
      (choice === 'spock' && computerChoice === 'paper') ||
      (choice === 'lizard' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'rock')) {
    return true;
  } else {
    return false;
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

  let randomIndex = Math.floor((Math.random() * VALID_CHOICES.length));
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