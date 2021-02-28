function sumOfSums(arr) {
  return sums(arr).reduce((acc , num) => acc + num);
}

function sums(arr) {
  let sums = [];
  arr.reduce((acc, num) => {
    sums.push(Number(acc) + num);
    return Number(acc) + num;
  },[]);
  return sums;
}

console.log("Function sumOfSums");
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

function sumOfSumsTwo(arr) {
  let sumTotal = 0;
  arr.forEach((_,idx) => {
    sumTotal += arr.slice(0, idx + 1).reduce((acc , num) => acc + num);
  });
  return sumTotal;
}
console.log("Function sumOfSumsTwo");
console.log(sumOfSumsTwo([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSumsTwo([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSumsTwo([4]));              // 4
console.log(sumOfSumsTwo([1, 2, 3, 4, 5]));  // 35


function sumOfSumsThree(arr) {
  return arr.map((_,idx) =>
    arr.slice(0, idx + 1).reduce((acc , num) => acc + num)
  ).reduce((acc , num) => acc + num);
}
console.log("Function sumOfSumsThree");
console.log(sumOfSumsThree([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSumsThree([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSumsThree([4]));              // 4
console.log(sumOfSumsThree([1, 2, 3, 4, 5]));  // 35