const numeric = {
  0 : 0,
  1 : 1,
  2 : 2,
  3 : 3,
  4 : 4,
  5 : 5,
  6 : 6,
  7 : 7,
  8 : 8,
  9 : 9
};

const signs = ["+", "-"];

function signedIntegerToString(number) {
  if (number === 0) return "0";
  else if (number < 0) {
    return signs[1] + integerToString(number * -1);
  } else return signs[0] + integerToString(number);
}

function integerToString(input) {
  let keys = Object.keys(numeric);
  let num = 0;
  let str = "";
  do  {
    num = input % 10;
    input -= num;
    input /= 10;
    str = keys[num] + str;
  } while (input > 0);
  return str;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");