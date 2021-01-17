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


console.log(integerToString(4321));      // "4321"
//console.log(integerToString(0));         // "0"
//console.log(integerToString(5000));      // "5000"
//console.log(integerToString(1234567890));      // "1234567890"