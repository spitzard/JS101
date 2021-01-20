function triangle(height) {
  let level = 1;
  while (level <= height) {
    console.log( ' '.repeat(height - level) + '*'.repeat(level));
    level++;
  }
}

triangle(5);
triangle(9);