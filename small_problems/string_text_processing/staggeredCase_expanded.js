function staggeredCase(phrase) {
  let alphaIdx = -1;
  return phrase.split("").map((char) => {
    if (char.match(/[^a-zA-Z]/)) return char;
    alphaIdx += 1;
    return (alphaIdx % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
  }).join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

