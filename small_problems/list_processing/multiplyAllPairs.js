let list1 = [2, 4];
let list2 = [4, 3, 1, 2];


function multiplyAllPairs(arr1, arr2) {
  return ([].concat(...arr1.map(num1 => {
    return arr2.map(num2 => num1 * num2);
  }))).sort((a, b) => a - b);
}

function multiplyAllPairsTwo(arr1, arr2) {
  return sortArray([].concat(...arr1.map(num1 => {
    return arr2.map(num2 => num1 * num2);
  })));
}

function multiplyAllPairsThree(arr1, arr2) {
  let multiplied = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => multiplied.push(num1 * num2));
  });
  return sortArray(multiplied);
}

function sortArray(array) {
  return array.sort((a,b) => a - b);
}

let sorted = multiplyAllPairs(list1, list2);
console.log(sorted);
let sorted2 = multiplyAllPairsTwo(list1, list2);
console.log(sorted2);
let sorted3 = multiplyAllPairsThree(list1, list2);
console.log(sorted3);


