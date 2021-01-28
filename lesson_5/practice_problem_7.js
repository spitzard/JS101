let a = 2;
let b = [5, 8];
let arr = [a, b]; // no reference from arr to a, a is a value assigmenet to the array.

arr[0] += 2; // => [4, [5,8]]
arr[1][0] -= a; // => [4, [3,8]]