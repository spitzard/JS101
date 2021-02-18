const INITIAL_MARKER =  ' ';
const HUMAN_MARKER = 'X';
const CPU_MARKER = 'O';

const WINNING_BOARD = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

const readlineSync = require('readline-sync');

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
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
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

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = CPU_MARKER;
}

function boardFull(board) {
  return (emptySquares(board).length === 0);
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

function someoneWon(board) {
  return !!detectWinner(board);
}

function displayBoard(board) {
  //console.clear();

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
  console.log('');
}

while (true) {
  let board = initializeBoard();
  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readlineSync.question().toLowerCase()[0];
  if (answer !== 'y') break;

}

prompt('Thanks for playing Tic Tac Toe!');