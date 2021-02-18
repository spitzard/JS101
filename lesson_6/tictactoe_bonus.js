const INITIAL_MARKER =  ' ';
const HUMAN_MARKER = 'X';
const CPU_MARKER = 'O';
const GAMES_TO_WIN_MATCH = 5;

const WINNING_BOARD = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

const readlineSync = require('readline-sync');
let score = {Player : 0, Computer : 0};

function joinOr(array, lister = ", ", link = "or") {
  let length = array.length;
  if (length === 0) return "";
  if (length === 1) return array[0].toString();
  if (length === 2) return array.join(" " + link + " ");
  return array.slice(0, length - 1).join(lister) + lister + link + " " + array[length - 1];
}

function evaluateAnswer(answer) {
  if (answer.length <= 3) {
    if (answer[0] === 'n') return 'n';
    else if (answer[0] === 'y') return 'y';
  }
  return true;
}

function squaresAtRisk(board, marker) {
  let squares = Object.keys(board).filter(keys => board[keys] === marker);
  squares  =  squares.map(Number);
  let combinations = WINNING_BOARD.map(global => {
    return global.filter( ele => {
      return !squares.includes(ele);
    });
  });
  let atRisk = combinations.filter(array => array.length === 1);
  return atRisk.filter(sqr => emptySquares(board).includes(sqr.toString()));
}

function defensiveAI(board) {
  return squaresAtRisk(board, HUMAN_MARKER);
}


function aggressiveAI(board) {
  return squaresAtRisk(board, CPU_MARKER);
}

function prompt(text) {
  console.log(`=> ${text}`);
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function playerChoosesSquare(board) {
  let square;
  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readlineSync.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt('Sorry that is not a valid choice');
  }
  board[square] = HUMAN_MARKER;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'Player' ) playerChoosesSquare(board);
  else computerChoosesSquare(board);
}

function chooseRandomSquare(squares) {
  let randomIndex = Math.floor(Math.random() * squares.length);
  return squares[randomIndex][0];
}

function computerChoosesSquare(board) {
  let defensiveSquares = defensiveAI(board);
  let offensiveSquares = aggressiveAI(board);

  if (offensiveSquares.length > 0) {
    board[chooseRandomSquare(offensiveSquares)] = CPU_MARKER;
  } else if (defensiveSquares.length > 0) {
    board[chooseRandomSquare(defensiveSquares)] = CPU_MARKER;
  } else {
    let squares = emptySquares(board);
    board[chooseRandomSquare(squares)] = CPU_MARKER;
  }
}

function boardFull(board) {
  return (emptySquares(board).length === 0);
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'Player' ? 'Computer' : 'Player';
}

function detectWinner(board) {
  for (let condition = 0; condition < WINNING_BOARD.length; condition++) {
    let [sq1, sq2, sq3] = WINNING_BOARD[condition];

    if (board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === CPU_MARKER &&
      board[sq2] === CPU_MARKER &&
      board[sq3] === CPU_MARKER
    ) {
      return "Computer";
    }
  }
  return null;
}

function keepScore(winner) {
  score[winner] += 1;
}

function resetScore() {
  score.Player = 0;
  score.Computer = 0;
}

function endMatch(score) {
  return Object.values(score).some(value => value === GAMES_TO_WIN_MATCH);
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${CPU_MARKER}`);
  console.log('');
  console.log(`     |     |`);
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log(`     |     |`);
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log(`\n The score is ${score.Player} : ${score.Computer}\n`);

}

while (true) {
  let currentPlayer = 'Player';
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }
  displayBoard(board);
  if (someoneWon(board)) {
    keepScore(detectWinner(board));
    prompt(`${detectWinner(board)} won the game!`);
  } else {
    prompt("It's a tie!");
  }

  if (endMatch(score)) {
    displayBoard(board);
    resetScore();
    prompt(`${detectWinner(board)} won the match! Congratulations!`);
    prompt('Play another match? (y or n)');
    let answer = evaluateAnswer(readlineSync.question().toLowerCase());

    while (answer) {
      if (answer === 'n') break;
      else if (answer === 'y' ) break;
      else {
        prompt('Unexpected input, please specify (y/Y or n/N)');
        answer = evaluateAnswer(readlineSync.question().toLowerCase());
      }
    }
    if (evaluateAnswer(answer) === 'n') {
      prompt('Thank you for playing Tic Tac Toe!');
      break;
    }
  }
  readlineSync.question();
}