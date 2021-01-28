let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
  if (typeof (subArr[0]) === 'string') {
    return subArr.slice().sort().reverse();
  } else return subArr.slice().sort((a, b) => b - a);
});

console.log(newArr);

let newSarr = ['b', 'c', 'a'].sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(newSarr);