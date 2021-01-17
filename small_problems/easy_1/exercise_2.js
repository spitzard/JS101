function logNumbersFromTo(first, last) {
  for (let num = first; num <= last; num += 2) {
    console.log(num);
  }
}


logNumbersFromTo(1, 99);
logNumbersFromToExplored(1, 99);

function logNumbersFromToExplored(first, last) {
  while (first <= last) {
    if (first % 2 !== 0) {
      console.log(first);
    }
    first += 1;
  }
}