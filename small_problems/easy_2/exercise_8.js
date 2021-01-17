function oddities(arr) {
  let oddities = [];
  for (let index = 0; index < arr.length; index += 2) {
    oddities.push(arr[index]);
  }
  return oddities;
}

function even(arr) {
  let even = [];
  for (let index = 1; index < arr.length; index += 2) {
    even.push(arr[index]);
  }
  return even;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(even([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(even([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]