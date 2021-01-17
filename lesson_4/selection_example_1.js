let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let result = selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(result);

// my implementation

function selectFruit(items) {
  let entries = Object.keys(items);
  let index = 0;
  let fruits = {};

  do {
    if (items[entries[index]] === 'Fruit') {
      fruits[entries[index]] = 'Fruit';
    }
    index += 1;
  } while (index < entries.length);
  return fruits;
}

// launschool implementation
/*
function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}
*/