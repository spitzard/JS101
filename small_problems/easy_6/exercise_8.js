function sequence(count, start) {
  let sequence = [];
  let acc = 0;
  for (let num = 0; num < count; num++) {
    acc += start;
    sequence.push(acc);
  }
  return sequence;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []