let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  let scoreSumA = a.reduce((acc, val) => acc + val);
  let scoreSumB = b.reduce((acc, val) => acc + val);
  return scoreSumA - scoreSumB;
});

console.log(scores);