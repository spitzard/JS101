function shortLongShort(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  return len1 < len2 ? str1.concat(str2, str1) : str2.concat(str1, str2);
}
let a = shortLongShort('abc', 'defgh');    // "abcdefghabc"
let b = shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
let cd = shortLongShort('', 'xyz');         // "xyz"

console.log(a);
console.log(b);
console.log(cd);