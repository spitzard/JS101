function interleave(arrA, arrB) {
  let maxIdx = arrA.length + arrB.length - 1;
  let inter = [];
  let corr = 0;
  for (let idx = 0; idx <= maxIdx; idx += 1) {
    // eslint-disable-next-line no-unused-expressions
    idx % 2 === 0 ? inter.push(arrA[idx - corr]) : inter.push(arrB[idx - corr]);
    if (idx % 2 === 0) corr += 1;
  }
  return inter;
}

// LS suggestions
/*
function interleave(array1, array2) {
   let newArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    newArray.push(array1[idx], array2[idx]);
  }

  return newArray;
}
*/

// further exploration

function interleaveA(arrA, arrB) {
  let interleaved = [];
  arrA.forEach((_, idx) => interleaved.push(arrA[idx], arrB[idx]));
  return interleaved;
}

function interleaveB(arrA, arrB) {
  let interleaved = arrA.map((_, idx) => [arrA[idx], arrB[idx]]);
  return [].concat(...interleaved);
}

function interleaveC(arrA, arrB) {
  return arrA.reduce((acc, curr, idx) => acc.concat(curr, arrB[idx]),[]);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleaveA([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleaveB([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleaveC([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

