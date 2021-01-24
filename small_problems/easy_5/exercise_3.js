function halvsies(array) {
  let halfs = [];
  let middle = Math.ceil((array.length ) / 2);
  let firstHalf = array.filter((_, idx) => idx < middle);
  halfs.push(firstHalf);
  halfs.push(array.slice(middle));
  return halfs;
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

// LS solution
/*
function halvsies(array) {
  let middle = Math.ceil((array.length ) / 2);
  let firstHalf = array.slice(0, middle);
  let secondHalf = array.slice(middle);
  return [firstHalf, secondHalf];
}
*/