function substrings(string) {
  return [].concat(...string.split("").map((_, idx) => leadingSubstrings(string.substr(idx))));
}

function leadingSubstrings(string) {
  let substrings = [];
  string.split("").reduce((acc, char) => {
    substrings.push(acc + char);
    return acc + char;
  },[]);
  return substrings;
}

console.log(substrings("abcde"));
