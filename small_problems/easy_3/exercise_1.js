function crunch(string) {
  let end = string.length - 1;
  let crunched = "";
  for (let index = 0; index <= end; index += 1) {
    if (string[index] === string[index + 1]) {
      continue;
    } else {
      crunched += (string[index]);
    }
  }
  return crunched;
}

function crunchy(string) {
  let arr = string.split("");
  let crunched  = arr.reduce( (acc, curr) => {
    if (acc[acc.length - 1] === curr) {
      return acc + "";
    } else return acc + curr;
  },"");
  return crunched;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));

console.log(crunchy('ddaaiillyy ddoouubbllee'));    // "daily double"