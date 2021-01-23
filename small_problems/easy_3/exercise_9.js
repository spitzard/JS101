function cleanUp(string) {
  let cleanString = string.replace(/[^a-z]/gi, " ").replace(/\s\s+/g," ");
  return cleanString;
}

console.log(cleanUp("---what's My +*& line?"));