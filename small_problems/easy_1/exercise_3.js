function evenNumbers(first, last) {
  while (first <= last) {
    if (first % 2 === 0) {
      console.log(first);
    }
    first++;
  }
}

evenNumbers(1, 99);