// my mcomplicated solution
function isBalanced(text) {
  let arr = text.replace(/[^()]/g, "").split("");
  console.log(arr.length % 2);
  if ((arr.length % 2 === 1 || arr[0] === ")")) {
    return false;
  } else {
    let center = (arr.length / 2);
    return arr.slice(0,center).join("") === reverseParenthesis(arr.slice(center)).reverse().join("");
  }
}

function reverseParenthesis(array) {
  return array.map(function(element) {
    if (element === "(") {
      return ")";
    } else return "(";
  });
}

// LS solution
/*
function isBalanced(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};
*/

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);