const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard' ,'spock'];
const VALID_SHORTCUTS = ['r', 'p', 'sc', 'l' ,'sp'];
const BEST_OF_FIVE = 5;

function displayResults(playerScore, computerScore) {
  prompt(`The best of five score is: ${playerScore} : ${computerScore}`);
  if (playerScore > computerScore) {
    prompt(`You are the grand winner!`);
  } else {
    prompt(`Computer is the grand winner!`);
  }
}

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
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock'  ||  computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' ||  computerChoice === 'lizard')) ||
      (choice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
      (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock'))) {
    return true;
  } else {
    return false;
  }
}

function computerWins(choice, computerChoice) {
  if ((choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
      (choice === 'spock' && (computerChoice === 'lizard' || computerChoice === 'paper')) ||
      (choice === 'lizard' && (computerChoice === 'scissors' || computerChoice === 'rock'))) {
    return true;
  } else {
    return false;
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}


let playerScore = 0;
let computerScore = 0;

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);

  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice) && !VALID_SHORTCUTS.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor((Math.random() * VALID_CHOICES.length));
  let computerChoice = VALID_CHOICES[randomIndex];

  if (VALID_SHORTCUTS.includes(choice)) {
    choice = VALID_CHOICES[VALID_SHORTCUTS.indexOf(choice)];
  }

  displayWinner(choice, computerChoice);

  if (playerWins(choice, computerChoice)) {
    playerScore += 1;
  }

  if (computerWins(choice, computerChoice)) {
    computerScore += 1;
  }

  if (playerScore === BEST_OF_FIVE || computerScore === BEST_OF_FIVE) {
    displayResults(playerScore, computerScore);
    playerScore = 0;
    computerScore = 0;
  }

  prompt('Do you want to play again (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer === 'n') break;
}