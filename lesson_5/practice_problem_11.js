let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let modArr = arr.map(obj => {
  let inc = {};
  Object.entries(obj).forEach(entry => {
    inc[entry[0]] = entry[1] + 1;
  });
  return inc;
});

console.log(modArr);