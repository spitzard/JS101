let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// not so great
let allEven = arr.filter(obj => {
  let subarr = Object.values(obj);
  if (!subarr.some(a =>   a.some(emma => emma % 2 === 1))) {
    return obj;
  }
});

console.log(allEven);
// great LS solution
let allEven2 = arr.filter(obj => {
  return Object.values(obj).every(subArray => {
    return subArray.every(num => num % 2 === 0);
  });
});

console.log(allEven2);