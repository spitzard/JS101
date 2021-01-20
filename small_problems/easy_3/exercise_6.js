let readlineSync = require('readline-sync');

function prompt(text) {
  return readlineSync.question(text);
}

let noun = prompt('Enter a noun: ');
let verb = prompt('Enter a verb: ');
let adjective = prompt('Enter an adjective: ');
let adverb = prompt('Enter an adverb: ');

let story = `\n\nThe ${adjective} ${noun} will ${verb} the spaghetti ${adverb}.\nNobody can ${verb} as ${adjective} as the ${noun}.\nMany have tried but have failed ${adverb}.`;

console.log(story);

