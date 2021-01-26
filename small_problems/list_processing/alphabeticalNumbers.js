const ALPHABETIC_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


function sorting(arr) {
  let array = arr.slice();
  let next = 0;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] > array[idx + 1 ]) {
      next = array[idx];
      array[idx] = array[idx + 1 ];
      array[idx + 1 ] = next;
    }
  }
  return array;
}

console.log(sorting([8,2,5,1]));