function stringToInteger(numericString) {
  let ciphers = numericString.length;
  let newINT = 0;
  for (let index = 0; index < ciphers; index++) {
    newINT += numericString[index] * (10 ** ((ciphers - 1) - index));
  }
  return newINT;
}


function hexadecimalToInteger(numericString) {
  const HEX = {
    A : 10,
    B : 11,
    C : 12,
    D : 13,
    E : 14,
    F : 15
  };
  const base = 16;

  let stringArr = numericString.toUpperCase().split("");
  let IntArr = stringArr.map( function(element) {
    if (HEX.hasOwnProperty(element)) {
      return HEX[element];
    } else return element;
  });

  let dig = IntArr.length - 1;
  return IntArr.reduce((acc, el, idx) => acc + (el * (base ** (dig - idx))),0); // not very nice tried to keep line maximum set by eslint

}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

console.log(hexadecimalToInteger('4D9f') === 19871); // logs true