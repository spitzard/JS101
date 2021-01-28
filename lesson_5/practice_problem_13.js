let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function oddSum(arr) {
  return arr.filter(num => num % 2 === 1).reduce((acc, val) => acc + val);
}

arr.sort((a, b) => oddSum(a) - oddSum(b));

console.log(arr);