function fibonacci(nth) {
  if (nth <= 2 ) return 1;
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

/*function proceduralFibonacci(nth) {
  let F1 = 1;
  let F2 = 1;
  let Fn = 0;
  if (nth <= 2 &&  nth > 0) return 1;
  for (let pos = 2; pos < nth; pos++) {
    Fn = F1 + F2;
    F1 = F2;
    F2 = Fn;
  }
  return Fn;
}
*/

function proceduralFibonacci(nth) {
  let fibonaccis = [1, 1];
  for (let pos = 2; pos < nth; pos++) {
    fibonaccis = [fibonaccis[1], fibonaccis[0] + fibonaccis[1]];
  }
  return fibonaccis[1];
}

console.log("RECURSIVE");
console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(12) === 144);

console.log("PROCEDURAL");
console.log(proceduralFibonacci(1) === 1);
console.log(proceduralFibonacci(3) === 2);
console.log(proceduralFibonacci(5) === 5);
console.log(proceduralFibonacci(5) === 5);
console.log(proceduralFibonacci(12) === 144);


/// example
function recursiveSum(num) {
  if (num === 1) return 1;
  return num + recursiveSum(num - 1);
}
console.log(recursiveSum(100) === 5050);


