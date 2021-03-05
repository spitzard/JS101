function triangle(a, b, c) {
  let side = [a, b, c].sort();

  if (side[0] + side[1] <= side[2]) return "invalid";
  else if (side[0] === side[1] || side[0] === side[2]) return "equilateral";
  else if (side[0] === side[1] || side[0] === side[2] || side[1] === side[2]) {
    return "isosceles";
  } else return "scalene";
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"