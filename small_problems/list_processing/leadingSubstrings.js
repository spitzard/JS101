let string1 = 'abc';
let string2 = "a";
let string3 = "xyzzy";

function leadingSubstrings(string) {
  let substrings = [];
  string.split("").reduce( (acc, char) => {
    substrings.push(acc + char);
    return acc + char;
  },[]);
  return substrings;
}

function leadingSubstringsTwo(string) {
  let substrings = [];
  string.split("").forEach((_, idx) => substrings.push(string.slice(0, idx + 1)));
  return substrings;
}

console.log(leadingSubstrings(string1));
console.log(leadingSubstrings(string2));
console.log(leadingSubstringsTwo(string3));