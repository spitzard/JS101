/*
Shallow Copying Arrays
*/

let arr = ['a', 'b', 'c'];
let copyOfArr = arr.slice();
arr.push('z');
console.log(copyOfArr); // => [ 'a', 'b', 'c' ];

// modern ES6 way of creating shallow array copies is using spread syntax ....
let arr2 = [1, 2, 3, 4, 5];
let copyOfArr2 = [...arr2];
arr2.push('99');
console.log(copyOfArr2); //  => 1, 2, 3, 4, 5];

/* but beware only the top level is copied
if the array has a nested structure e.g. other
objects than these objects are shared
*/

let arr3 = [['a'], ['b'], ['c']];
let copyOfArr3 = arr3.slice();

copyOfArr3[1].push('d');

console.log(arr3);       // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
console.log(copyOfArr3); // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
// why ? objects inside the top level arr3 strucuture are: [[shared], [shared]]

// same with plain objects

let arr4 = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
let copyOfArr4 = [...arr];

copyOfArr4[1].d = 'qux';

console.log(arr4);       // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]
console.log(copyOfArr4); // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]

/*
Shallow Copying Objects
*/

let obj1 = {a : 'foo'};
let obj2 = {b : 'bar'};

Object.assign(obj1, obj2); // => {a : 'foo', b : 'bar'}}
console.log(obj1); // => {a : 'foo', b : 'bar'}}

let obj = { a: 'foo', b: 'bar' };
let copyOfObj = Object.assign({}, obj);

console.log(copyOfObj); // => { a: 'foo', b: 'bar' }

copyOfObj['c'] = 'baz';
console.log(copyOfObj); // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
console.log(obj);       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }