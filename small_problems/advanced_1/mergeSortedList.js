function merge(arr1, arr2) {
  let merged = [];
  let idx = 0;
  let jdx = 0;
  while (idx < arr1.length && jdx < arr2.length) {
    if (arr1[idx] < arr2[jdx]) {
      merged.push(arr1[idx]);
      idx++;
    } else if ((arr1[idx] > arr2[jdx])) {
      merged.push(arr2[jdx]);
      jdx++;
    }
  }
  if (idx < arr1.length) merged = merged.concat(arr1.slice(idx));
  if (jdx < arr2.length) merged = merged.concat(arr2.slice(jdx));
  return merged;
}

console.log(merge([2, 3, 5], [0, 1, 1]));
console.log(merge([2, 6, 8, 20], [1, 5, 9]));
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([2, 2], [1, 1, 3]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]


/// beautiful LS solution
function mergeLS(arr1, arr2) {
  if ([arr1, arr2].some((subarr) => subarr.length === 0)) {
    return [].concat(...[arr1, arr2].filter(subarr => subarr.length > 0));
  }
  let merged = [];
  let arrA = arr1.slice();
  let arrB = arr2.slice();

  while (arrA.length > 0 && arrB.length > 0) {
    merged.push(arrA[0] <= arrB[0] ? arrA.shift() : arrB.shift());
  }
  return merged.concat(arrA.length === 0 ? arrB : arrA);
}
