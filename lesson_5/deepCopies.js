/**
 * No such explicit method to create deep copies, but there are ways
 */

let arr = [{a : 'foo'},['bar']];
let serializedArr = JSON.stringify(arr); // serialize to primitaves, arrays, object as elements to string
let deepCopiedArr = JSON.parse(serializedArr); // convert the serialized string back, creating a deep copy

deepCopiedArr[1].push('baz');
console.log(deepCopiedArr); // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
console.log(arr);           // => [ { b: 'foo' }, [ 'bar' ] ]

arr[1].push('carr');
console.log(deepCopiedArr); // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
console.log(arr);           // => [ { b: 'foo' }, [ 'bar' , 'carr'] ]
