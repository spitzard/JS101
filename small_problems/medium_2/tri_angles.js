function triangle(alpha, beta, gamma) {
  let angles = [alpha, beta, gamma];
  let negzero = angles.every(angle => angle > 0);
  if (alpha + beta + gamma !== 180 || !negzero ) return "invalid";
  else if (angles.filter(angle => angle === 90).length === 1) return "right";
  else if (angles.every(angle => angle < 90)) return "acute";
  else return "obtuse";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
