/*
function swapName(name) {
  return name.split(" ").reverse().join(", ");
}
*/

function swapName(name) {
  name = name.split(" ");
  let lastname = name[name.length - 1].concat(", ");
  return lastname + name.slice(0, name.length - 1).join(" ");
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"