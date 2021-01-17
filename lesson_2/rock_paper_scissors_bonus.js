const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard' ,'spock'];
const SCORE_TO_WIN = 5;
const SCORE = { player : 0, computer : 0};
const ANSWER = { 'next match' : 'y'};
const WINNING_COMBOS = {
  rock : ['lizard' , 'scissors'],
  paper : ['rock' , 'spock'],
  scissors : ['lizard' , 'paper'],
  lizard : ['paper' , 'spock'],
  spock : ['rock' , 'scissors'],
};

function welcomeGreeting() {
  if(SCORE.player === 0 && SCORE.computer === 0) {
    prompt("------------------------------------------------------------------------");
    prompt('Welcome to Rock, Paper, Scissors, Lizard & Spock');
    prompt("");
    prompt(`The first one to score ${SCORE_TO_WIN} points will win the match!`);
    prompt("------------------------------------------------------------------------");
    prompt("");
  }
}


function displayWinner(choice, computerChoice) {

  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt('Computer wins!');
  }
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function trackScore(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    SCORE.player += 1;
  } else if (!(choice === computerChoice)) {
    SCORE.computer += 1;
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function matchEnds() {
  if ( SCORE.player === SCORE_TO_WIN || SCORE.computer === SCORE_TO_WIN) {
    return true;
  } else {
    return false;
  }
}

function displayGrandWinner(matchIsOver) {
  if (matchIsOver) {
    prompt("------------------------------------------------------------------------");
    prompt(`The match is over.The final score is ${SCORE.player} : ${SCORE.computer}`);
    prompt("");
    if (SCORE.player > SCORE.computer) {
      prompt("Congratulations you are the grand winner!");
      prompt("------------------------------------------------------------------------");
    } else {
      prompt("The computer is the grand winner!");
      prompt("------------------------------------------------------------------------");
    }
  }
}

function resetScore(matchIsOver) {
  if (matchIsOver) {
    SCORE.player = 0;
    SCORE.computer = 0;
  }
}

function nextMatch(matchIsOver) {
  if (matchIsOver) {
    prompt('Do you want to play again (y/n)');
    ANSWER['next match'] = readline.question().toLowerCase();
    while (ANSWER['next match'] !== 'y' && ANSWER['next match'] !== 'n') {
      prompt('Please enter "y" or "n".');
      ANSWER['next match'] = readline.question().toLowerCase();
    }
  }
}

while (ANSWER['next match'] === 'y') {
  welcomeGreeting();

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
  trackScore(choice, computerChoice);
  displayGrandWinner(matchEnds());

  nextMatch(matchEnds());
  resetScore(matchEnds());
}