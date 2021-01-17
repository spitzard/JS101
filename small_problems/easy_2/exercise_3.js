function multiply(num1, num2) {
  return num1 * num2;
}

const multiplyArrow = (number1, number2) => number1 * number2;

console.log(multiply(5, 3) === 15); // logs true
console.log(multiplyArrow(5, 3) === 15); // logs true