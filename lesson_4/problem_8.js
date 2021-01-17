let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// my implementation

let obj = {};
flintstones.forEach((person, index) => {
  obj[person] = index;
});

console.log(obj);