function featured(num) {
  const MAX_FEATURED = 9876543201;
  while (true) {
    num++;
    if (mod(num, 7) && !mod(num, 2) && unique(num)) return num;
    if (num > MAX_FEATURED) return 'There is no possible number that fulfills those requirements.';
  }
}

function mod(num, div) {
  return num % div === 0;
}

function unique(num) {
  let array = String(num).split("");
  return !array.some((ele, idx) => {
    return array.slice(idx + 1).includes(ele);
  });
}

console.log(featured(12) === 21);           // 21
console.log(featured(20) === 21);           // 21
console.log(featured(21) === 35);           // 35
console.log(featured(1029) === 1043); // 1043
console.log(featured(997) === 1029); // 1029
console.log(featured(999999) === 1023547);       // 1023547
console.log(featured(999999987) === 1023456987);    // 1023456987
console.log(featured(9876543200) === 9876543201);   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

