
let stack = [];
let register = 0;

function minilang(input) {

  input = input.split(" ");
  for (let pos = 0; pos < input.length; pos++) {
    let command = input[pos];
    if (Number.isNaN(Number(command)) === false) register = Number(command);
    actions(command);
  }
}

function actions(command) {
  switch (command) {
    case "PUSH": stack.push(register);
      break;
    case "POP": register = stack.pop();
      break;
    case "ADD": register += stack.pop();
      break;
    case "SUB": register -= stack.pop();
      break;
    case "MULT":  register *= stack.pop();
      break;
    case "DIV": register = Math.floor(register /= stack.pop());
      break;
    case "MOD": register %=  stack.pop();
      break;
    case "PRINT":  console.log(register);
      break;
  }
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');