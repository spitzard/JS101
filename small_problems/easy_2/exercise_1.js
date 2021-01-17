
// my implementation, more general

function greetings(name, information) {
  let fullName = name.join(" ");
  let infoKeys = Object.keys(information);
  let infoMerged = "";
  for (let index = 0; index < infoKeys.length; index += 1) {
    let key = infoKeys[index];
    infoMerged += information[key] + " ";
  }
  return "Hello, " + fullName + "! Nice to have a " + infoMerged + "around.";
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));

// lS implementation
/*
function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}
*/