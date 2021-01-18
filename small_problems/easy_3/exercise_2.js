/*
function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
*/

function logInBox(message) {
  let width = message.length + 2;
  let height = 4;
  let topBottom = [];
  let middle = [];
  let spacing = [];
  for (let row = 0; row <= height - 2; row++) {
    for (let column = 0; column <= width; column++) {
      if (row === 0 && (column === 0 || column === width)) {
        topBottom.push("+");
      } else if ( row === 0) {
        topBottom.push('-');
      } else if (row === 1 && (column === 0 || column === width)) {
        spacing.push('|');
      } else if (row === 1) { 
        spacing.push(" "); 
      } else if (row === 2 && (column === 0 || column === width)) {
        middle.push("|")
      } else if (row === 2 && (column === 1 || column === width - 1)) {
        middle.push(" ");
      } else if (row === 2) {
        middle.push(message[column-2]);
      }
    }
  }
  console.log(topBottom.join(""));
  console.log(spacing.join(""));
  console.log(middle.join(""));
  console.log(spacing.join(""));
  console.log(topBottom.join(""));
}


logInBox('To boldly go where no one has gone before.');

logInBox("");