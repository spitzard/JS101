function union(arrayA, arrayB) {
  let mergedArray = [];
  arrayA.forEach(element => mergedArray.push(element));
  arrayB.forEach(function(element) {
    if (!mergedArray.includes(element)) {
      mergedArray.push(element);
    }
  });
  return mergedArray;
}

let uni1 = union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
console.log(uni1);

function unionFilter(arrayA, arrayB) {
  let union = arrayB.filter( ele => !arrayA.includes(ele));
  arrayA.reverse().forEach(ele => union.unshift(ele));
  return union;
}

let uni2 = unionFilter([9, 10, 4, 3, 5], [3, 6, 9, 4]);    // [1, 3, 5, 6, 9]
console.log(uni2);
let uni3 = unionFilter([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
console.log(uni3);