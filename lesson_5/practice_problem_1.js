let arr = ['10', '11', '9', '7', '8'];

function sortDescending(arr) {
  return arr.sort((a, b) => Number(b) - Number(a));
}

console.log(sortDescending(arr));