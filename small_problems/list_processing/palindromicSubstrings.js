function leadingSubstrings(string) {
  let strings = [];
  string.split("").reduce((acc, char) => {
    strings.push(acc + char);
    return acc + char;
  },[]);
  return strings;
}

function substrings(string) {
  return [].concat(...string.split("").map((_,idx) => leadingSubstrings(string.substr(idx))));
}

console.log(leadingSubstrings("abcde"));
console.log(substrings("abcde"));


function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function isPalindrome(string) {
  return string.length > 1 && string === string.split("").reverse().join("");
}

console.log(isPalindrome("madaM"));
console.log(isPalindrome("ada"));
console.log(isPalindrome("dd"));
console.log(isPalindrome("dd"));
console.log(palindromes("madam"));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));
