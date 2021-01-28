let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let modArr = arr.map(subArr => {
  return subArr.slice().filter(ele => ele % 3 === 0);
});

console.log(modArr);