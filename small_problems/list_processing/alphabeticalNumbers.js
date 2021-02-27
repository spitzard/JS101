const ALPHABETIC_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let integers = [0, 1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

function alphabeticNumberSort(array) {
  return array.sort((a, b) => {
    if (ALPHABETIC_NUMBERS[a] > ALPHABETIC_NUMBERS[b]) return 1;
    else if (ALPHABETIC_NUMBERS[a] < ALPHABETIC_NUMBERS[b]) return -1;
    else return 0;
  });
}
let integersSorted = alphabeticNumberSort(integers);
console.log(integersSorted);
console.log(ALPHABETIC_NUMBERS.sort());