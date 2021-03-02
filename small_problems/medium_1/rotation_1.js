function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  else if (array.length === 0) return [];
  let rotated = array.slice();
  rotated.push(rotated.shift());
  return rotated;
}

function rotateArrayEX(array) {
  if (!Array.isArray(array)) return undefined;
  else if (array.length === 0) return [];
  return array.slice(1).concat(array.slice().shift());

}

function rotateArrayEX2(array) {
  if (!Array.isArray(array)) return undefined;
  else if (array.length === 0) return [];
  return array.slice(1).concat(array.slice(0,1));

}

function rotateArrayEX3(array) {
  if (!Array.isArray(array)) return undefined;
  else if (array.length === 0) return [];
  return array.slice(1).concat(array[0]);

}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArrayEX(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArrayEX(['a']));                    // ["a"]
console.log(rotateArrayEX3([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArrayEX([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArrayEX([]));                       // []

console.log(rotateArrayEX());                         // undefined
console.log(rotateArrayEX(1));                        // undefined

let array = [1, 2, 3, 4];
console.log(rotateArrayEX2(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]