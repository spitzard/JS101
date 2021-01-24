function sequence(number) {
  let sequence = [];
  for (let num = 1; num <= number; num++) {
    sequence.push(num);
  }
  return sequence;
}


sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]