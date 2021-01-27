/**
 * Freezing Objects -> freeze object so that it cannot be modified;
 */
let obj = Object.freeze({ a: 'foo' });
let arr = Object.freeze(['a', 'b', 'c']);

obj['b'] = 'bar';
console.log(obj); // => { a: 'foo' }
/* arr.push('d'); //
=> TypeError: Cannot add property 3, object is not extensible
*/
console.log(arr); // => [ 'a', 'b', 'c' ]


Object.isFrozen('abc'); // => true
// here freeze only applies to the top level
let arr2 = Object.freeze([[1], [2], [3]]);
arr2[2].push(4);
console.log(arr); // =>  [ [ 1 ], [ 2 ], [ 3, 4 ] ]
arr2.push(5); // TypeError: Cannot add property 3, object is not extensible
console.log(arr); // =>  [ [ 1 ], [ 2 ], [ 3, 4 ] ]


[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).some(key => object[key][0] === key);
});