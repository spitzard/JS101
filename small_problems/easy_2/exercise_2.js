let readLineSync = require('readline-sync');

// my implementation, removes all exclamation marks
function processAnswer(answer) {
  if (answer.includes("!")) {
    console.log(`Hello ${answer.replace(/!/g,"")}. WHY ARE YOU SCREAMING?`.toUpperCase());
  } else console.log(`Hello ${answer}.`);

}

console.log("What is your name?");
let name =  readLineSync.question();

processAnswer(name);

// LS implementation, valid for one exclamation mark in the answer
/*
let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name?\n");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
*/
