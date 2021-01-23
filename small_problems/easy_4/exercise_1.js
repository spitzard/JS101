const AGES = [20, 121];

function teddysAge() {
  return Math.floor((Math.random() * (AGES[1] - AGES[0]))) + AGES[0];
}

console.log(`Teddy is ${teddysAge()} years old.`);