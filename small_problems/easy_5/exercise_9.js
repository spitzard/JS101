function countOccurrences(array) {
  let occ = {};
  array.forEach( function(key) {
    key = key.toLowerCase();
    if (!occ[key]) {
      occ[key] = 1;
    } else occ[key] += 1;
  });
  logEntries(occ);
}

function logEntries(object) {
  let entries = Object.entries(object);
  entries.forEach(entry => console.log(`${entry[0]} => ${entry[1]}`));
}

let vehicles = ['CAR', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);