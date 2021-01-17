let readlineSync = require('readline-sync');
const SQUARE_METER_TO_FEET = 10.7639;

function prompt(message) {
  console.log(`=> ${message}`);
}

function answer(message) {
  return readlineSync.question(prompt(message));
}

function sqMeterToFeet(sqMeter) {
  return sqMeter * SQUARE_METER_TO_FEET;
}

function calcSquareMeters(width, length) {
  return width * length;
}

function displayResult(squareMeters) {
  let feet = sqMeterToFeet(squareMeters);
  console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${feet.toFixed(2)} square feet).`);
}

let length = Number(answer("What is the length of the room in meters?"));
let width = Number(answer("What is the width of the room in meters?"));

let squares = calcSquareMeters(length, width);

displayResult(squares);

