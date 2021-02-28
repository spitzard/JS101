function swapCase(string) {
  return string.split("").map(char => {
    return lower(char) ? char.toUpperCase() : char.toLowerCase();
  }).join("");
}

function lower(char) {
  return char >= "a" && char <= "z";
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"