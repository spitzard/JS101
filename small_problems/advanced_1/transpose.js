let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(matrix) {
  let transposed = JSON.parse(JSON.stringify(matrix));
  for (let row = 0; row < transposed[0].length; row++) {
    for (let col = 0; col < transposed[0].length; col++) {
      transposed[row][col] = matrix[col][row];
    }
  }
  return transposed;
}

let newMatrix = transpose(matrix);
console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

