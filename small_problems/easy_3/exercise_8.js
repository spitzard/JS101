function getGrade(score1, score2, score3) {
  let avgScore = (score1 + score2 + score3) / 3;

  switch (true) {
    case avgScore >= 90: return 'A';
    case avgScore >= 80: return 'B';
    case avgScore >= 70: return 'C';
    case avgScore >= 60: return 'D';
    default: return 'F';
  }
}
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"