function multiply(num1, num2) {
  return num1 * num2;
}
function square(num) {
  return multiply(num, num);
}
// does not work for power < 2
function nthPower(num, power) {
  let product = 1;
  if (!(power % 2 === 0)) {
    for (let idx = 2; idx <= power - 1; idx += 1) {
      product *= multiply(num, num);
    }
    product *= num;
  } else {
    for (let idx = 2; idx <= power; idx += 2) {
      product *= multiply(num, num);
    }
  }
  return product;
}

const squareArrow = (number) => multiply(number, number);

console.log(square(5) === 25); // logs true
console.log(squareArrow(-8) === 64); // logs true

console.log(nthPower(3,3) === 27); //logs true
console.log(nthPower(5,4) === 625); //logs true


