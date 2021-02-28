function letterCaseCount(string) {
  let lettercases = { lowercase: 0, uppercase: 0, neither: 0 };
  string.split("").forEach(letter => {
    lettercases[kindOf(letter)] += 1;
  });
  return lettercases;
}

function kindOf(char) {
  if (char.match(/[a-z]/)) return "lowercase";
  if (char.match(/[A-Z]/)) return "uppercase";
  else return "neither";
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }