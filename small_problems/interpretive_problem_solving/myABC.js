const BLOCKS = [["B","O"], ["X","K"], ["C","P"] , ["N","A"],
  ["G","T"], ["R","E"], ["F","S"], ["J","W"], ["H","U"],
  ["V","I"], ["L","Y"], ["Z","M"]];


// first attempt
function isBlockWord(word) {
  let avail = BLOCKS.slice().map(_ => "yes");
  let array = word.toUpperCase().split("");
  let blockWord = BLOCKS.map( (BLOCK,idx) => {
    return array.every(char => {
      if (BLOCK.includes(char) && avail[idx] === "yes") {
        avail[idx] = "no";
        return true;
      } else if (BLOCK.includes(char) && avail[idx] === "no") return false;
      else return true;
    });
  });
  return !blockWord.includes(false);
}
/*
console.log(isBlockWord("BATCH"));
console.log(isBlockWord("BUTCH"));
console.log(isBlockWord('jester'));
*/
// second attempt -> use slice to decimate BLOCKS array

function isBlockWordEX(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  let chars  = word.toUpperCase().split("");
  for (let char = 0; char < chars.length; char++) {
    let matchingBlock = blocks.filter(block => block.includes(chars[char]));
    if (matchingBlock.length === 0) return false;
    else blocks.splice(blocks.indexOf(...matchingBlock),1);
  }
  return true;
}

console.log(isBlockWordEX("BATCH"));
console.log(isBlockWordEX("BUTCH"));
console.log(isBlockWordEX('jest'));

// regex LS solution

function isBlockWordRegex(word) {
  let blocks = [/B|O/gi, /X|K/gi, /D|Q/gi, /C|P/gi, /N|A/gi, /G|T/gi, /R|E/gi,
    /F|S/gi, /J|W/gi, /H|U/gi, /V|I/gi, /L|Y/gi, /Z|M/gi];
  return blocks.every(regExp => {
    console.log(word.match(regExp));
    return (word.match(regExp) || []).length < 2;
  });
}

console.log(isBlockWordRegex("BATCH"));
console.log(isBlockWordRegex("BUTCH"));
console.log(isBlockWordRegex('jest'));