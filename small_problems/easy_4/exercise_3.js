const readlineSync = require('readline-sync');
const currentYear  = new Date().getFullYear();

function prompt(text) {
  return Number((readlineSync.question(text)));
}

function prognosis(age, retirement) {
  let workYears = retirement - age;
  let pensionYear = currentYear + workYears;

  prognosisMessage(workYears, pensionYear);

}

function prognosisMessage(work, retireIn) {
  console.log(`It's ${currentYear}. You will retire in ${retireIn}.`);
  console.log(`You have only ${work} years of work to go.`);
}

let age = prompt("What is your current age? ");
let retirement = prompt("At what age would you like to retire? ");

prognosis(age, retirement);

