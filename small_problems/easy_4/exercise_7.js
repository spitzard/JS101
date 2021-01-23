function runningTotal(array) {
  let total = [];
  array.forEach(function(num, index) {
    if (index === 0) total.push(num);
    else total.push(num + total[index - 1]);
  });
  return total;
}

function runningTotalMap(array) {
  let newNum = 0;
  return array.map( function(num,index) {
    newNum += num;
    if (index === 0) return num;
    else return (newNum);
  });
}

let rta  = runningTotalMap([2, 5, 13]);             // [2, 7, 20]
let rtb  = runningTotalMap([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
let rtc  = runningTotal([3]);                    // [3]
let rtd  = runningTotal([]);                     // []

console.log(rta);
console.log(rtb);
console.log(rtc);
console.log(rtd);
