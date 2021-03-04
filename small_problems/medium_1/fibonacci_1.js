function fibonacci(nth) {
  if (nth < 1) return 0;
  if (nth <= 2 ) return 1;

  return fibonacci(nth - 1) + fibonacci(nth - 2);
}


function recursiveSum(num) {
  if (num === 1) return 1;
  return num + recursiveSum(num - 1);
}

console.log(recursiveSum(100) === 5050);
console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(12) === 144);
console.log(fibonacci(0));