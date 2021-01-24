/*
function negative(number) {
  return Math.abs(number) * Math.sign(-1);
}
*/

function negative(number) {
  return Math.sign(number) >= 0 ? number * -1 : number;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0