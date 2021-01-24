function multiplyList(arrA, arrB) {
  return arrA.reduce((acc, val, idx) => acc.concat(val * arrB[idx]), []);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]