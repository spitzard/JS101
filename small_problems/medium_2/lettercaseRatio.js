function letterPercentages(string) {
  let percentages = {lowercase : 0, uppercase : 0, neither : 0};
  string.split("").forEach(char => {
    if (char.match(/[a-z]/g)) percentages.lowercase += 1;
    else if (char.match(/[A-Z]/g)) percentages.uppercase += 1;
    else percentages.neither += 1;
  });
// not very good solution does not make use of the complete
// functionality of match
  calculatePercentages(percentages, string.length);
  return percentages;
}

function letterPercentagesEX(string) {
  let count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(
      2
    )
  };
}

function letterPercentagesEX2(string) {
  let count = string.length;

  /* function has lexical scope : meaning can access the variables
  from the outer function*/
  function percentages(regex) {
    let matching = string.match(regex) || [];
    return (matching.length / count * 100).toFixed(2);
  }

  return { lowercase : percentages(/[a-z]/g),
    uppercase : percentages(/[A-Z]/g),
    neither : percentages(/[^a-z]/gi) };

}

function calculatePercentages(counts, total) {
  Object.keys(counts).forEach(key => {
    counts[key] = ((counts[key] / total) * 100).toFixed(2);
  });
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentagesEX2('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }