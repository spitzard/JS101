function sumSquareDifference(count) {
  let sum = 0;
  let sumSquares = 0;
  for (count; count > 0; count--) {
    sum += count;
    sumSquares += count ** 2;
  }
  return (sum ** 2) - sumSquares;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

