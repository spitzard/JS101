let readlineSync =  require("readline-sync");
const messages = {
  bill : "What is the bill? ",
  tipPercent : "What is the tip percentage? ",
  tip : "The tip is $",
  total : "The total is $"};


function calculateTip(bill, percent) {
  return Number(bill) / 100 * Number(percent);
}

function totalBill(bill, tip) {
  return Number(bill) + Number(tip);
}

let bill = readlineSync.question(messages.bill);
let tipPercent = readlineSync.question(messages.tipPercent);

let tip = calculateTip(bill, tipPercent);
let total = totalBill(bill, tip);

console.log("\n" + messages.tip + tip.toFixed(2));
console.log(messages.total + total.toFixed(2));