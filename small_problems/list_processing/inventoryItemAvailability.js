let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemID, transactions) {
  return transactions.filter(item => item.id === itemID);
}

function isItemAvailable(itemID, transactions) {
  return transactionsFor(itemID, transactions).reduce((quantity, item) => {
    if (item.movement === 'in') return quantity + item.quantity;
    else return quantity - item.quantity;
  },0) > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true