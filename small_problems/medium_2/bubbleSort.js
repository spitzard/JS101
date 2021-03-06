function bubbleSort(array) {
  for (let outer = 0; outer < array.length; outer++) {
    let swapped = false;
    for (let inner = 0; inner < array.length; inner++) {
      if (array[inner] > array[inner + 1]) {
        if (array[inner]  > array[inner + 1]) {
          [array[inner], array[inner + 1]] = [array[inner + 1], array[inner]];
          swapped = true;
        }
        if (swapped === false) break;
      }
    }
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]