function mergeSort(arr) {
  let middle = Math.floor(arr.length / 2);
  if (middle < 1) {
    return arr;
  }
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle, arr.length));
  return merge(left, right);
}


function merge(arr1, arr2) {
  let merged = [];
  let arrA = arr1.slice();
  let arrB = arr2.slice();
  while (arrA.length > 0 && arrB.length > 0) {
    merged.push(arrA[0] <= arrB[0] ? arrA.shift() : arrB.shift());
  }
  return merged.concat(arrA.length === 0 ? arrB : arrA);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]