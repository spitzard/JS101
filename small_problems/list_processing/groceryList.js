function buyFruit(arr) {
  let groceries = [];
  arr.forEach(subarr => {
    for (let idx = 0; idx < subarr[1]; idx++) groceries.push(subarr[0]);
  });
  return groceries;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));

function buyFruitTwo(arr) {
  return [].concat(...arr.map(subarr => {
    let groceries = [];
    for (let idx = 0; idx < subarr[1]; idx++) groceries.push(subarr[0]);
    return groceries;
  }));
}


console.log(buyFruitTwo([['apple', 3], ['orange', 1], ['banana', 2]]));