function stringToSignedInteger(stringNum) {
  const signs = {
    "-" : -1,
    "+" : 1
  };
  const base = 10;
  let sign = "+";

  let strArr = stringNum.split("");
  let keys = Object.keys(signs);
  if (keys.includes(strArr[0])) {
    sign = strArr.shift();
  }
  let dig = strArr.length - 1;
  let num = strArr.reduce((acc, el, id) => acc + (el * (base ** (dig - id))),0);

  return num * signs[sign];
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true