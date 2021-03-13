/*function diamond(height) {
  for (let count = 1; count <= height * 2; count += 2) {
    let nspacing = Math.abs((height - count) / 2);
    let counter = count;
    if (counter > height) counter = (height * 2) - count;
    if (nspacing > 0) {
      console.log(" ".repeat(nspacing) + "*".repeat(counter));
    } else console.log("*".repeat(counter));
  }
}
*/


function diamond(height) {
  let increment = 2;
  for (let count = 1; count > 0; count += increment) {
    let nspacing = Math.abs((height - count) / 2);
    if (nspacing > 0) {
      console.log(" ".repeat(nspacing) + "*".repeat(count));
    } else console.log("*".repeat(count));
    if (count === height) increment = -2;
  }
}

diamond(99);

function hallowDiamond(height) {
  let increment = 2;
  for (let count = 1; count > 0; count += increment) {
    let nspacing = Math.abs((height - count) / 2);
    if (count > 1) {
      console.log(" ".repeat(nspacing) + "*" + " ".repeat(count - 2) + "*");
    } else console.log(" ".repeat(nspacing) + "*");
    if (count === height) increment = -2;
  }
}

hallowDiamond(99);