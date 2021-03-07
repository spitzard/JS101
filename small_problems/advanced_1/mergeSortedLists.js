function merge1(arr1, arr2) {
  let merged = [];
  let idx = 0;
  let jdx = 0;
  while (true) {
    if (idx === arr1.length && jdx === arr2.length) break;
    if (arr1[idx] <= arr2[jdx] || jdx === arr2.length) {
      merged.push(arr1[idx]);
      idx++;
    } else {
      merged.push(arr2[jdx]);
      jdx++;
    }
  }
  return merged;
}

function merge2(arr1, arr2) {
  let merged = [];
  let idx = 0;
  let jdx = 0;
  while (idx < arr1.length && jdx < arr2.length) {
    if (arr1[idx] <= arr2[jdx]) {
      merged.push(arr1[idx]);
      idx++;
    } else {
      merged.push(arr2[jdx]);
      jdx++;
    }
  }
  if (idx < arr1.length) merged = merged.concat(arr1.slice(idx));
  if (jdx < arr2.length) merged = merged.concat(arr2.slice(jdx));
  return merged;
}

function merge3(arr1, arr2) {
  let merged = [];
  let range = [Math.min(...arr1, ...arr2), Math.max(...arr1, ...arr2)];
  for (let value = range[0]; value <= range[1]; value++) {
    arr1.forEach(val => {
      if (val === value) merged.push(value);
    });
    arr2.forEach(val => {
      if (val === value) merged.push(value);
    });
  }
  return merged;
}

function merge4(arr1, arr2) {
  let merged = [];
  let range = [Math.min(...arr1, ...arr2), Math.max(...arr1, ...arr2)];
  for (let value = range[0]; value <= range[1]; value++) {
    arr1.forEach(val => (val === value ? merged.push(value) : null));
    arr2.forEach(val => (val === value ? merged.push(value) : null));
  }
  return merged;
}

function merge5(arr1, arr2) {
  let merged = [];
  let arrA = arr1.slice();
  let arrB = arr2.slice();
  while (arrA.length > 0 && arrB.length > 0) {
    merged.push(arrA[0] <= arrB[0] ? arrA.shift() : arrB.shift());
  }
  return merged.concat(arrA.length === 0 ? arrB : arrA);
}


console.log(merge5([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge5([2, 6, 8], [1, 5, 9, 10]));      // [1, 2, 5, 6, 8, 9]
console.log(merge5([2, 2], [1, 1, 3]));         // [1, 1, 2, 2, 3]
console.log(merge5([1, 1, 3], [2, 2] ));         // [1, 1, 2, 2, 3]
console.log(merge5([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge5([1, 4, 5], []));             // [1, 4, 5]