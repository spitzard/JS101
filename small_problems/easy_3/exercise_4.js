function findFibonacciIndexByLength(digits) {
  let num1 = 1;
  let num2 = 1;
  let newNum = 1;
  let index = 2;
  while (newNum <= 10 ** (digits - 1)) {
    newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
    index++;
    console.log(newNum);
  }
  return index;
}

console.log(findFibonacciIndexByLength(21));