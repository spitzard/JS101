function binarySearch(array, searchItem) {
  let arr = array.slice();
  let mdx = Math.floor((arr.length ) / 2);
  let sumdx = mdx;
  while (true) {
    console.log(arr[mdx]);
    if (arr[mdx] === searchItem) return sumdx;
    else if (arr[mdx] > searchItem && arr.length > 1) {
      arr = arr.slice(0, mdx);
      mdx = Math.floor((arr.length )  / 2);
      sumdx = mdx;
    } else if (arr[mdx] < searchItem && arr.length > 1) {
      arr = arr.slice(mdx);
      mdx = Math.floor((arr.length) / 2);
      sumdx += mdx;
    } else return -1;
  }
}

function binarySearchEX(array, searchItem) {
  let high = array.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (array[mid] === searchItem) return mid;
    else if (array[mid] < searchItem) low = mid + 1;
    else  high = mid - 1;
  }
  return -1;
}


function binarySearchEXR(array, searchItem, index = 0) {
  let arr = array.slice();
  let middle = Math.floor((arr.length ) / 2);
  if (arr[middle] === searchItem) return middle + index;
  else if (arr[middle] < searchItem) {
    index = index + middle + 1;
    return binarySearchEXR(arr.slice(middle + 1), searchItem, index);
  } else if (arr[middle] > searchItem) {
    return binarySearchEXR(arr.slice(0, middle), searchItem, index);
  } else return -1;
}

function binarySearchEXR2(array, search, low = 0, high = array.length - 1) {
  if (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (array[mid] === search) return mid;
    else if (array[mid] < search) {
      return binarySearchEXR2(array, search, mid + 1, high);
    } else if  (array[mid] > search) {
      return binarySearchEXR2(array, search, low, mid - 1);
    }
  }
  return -1;
}


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearchEXR2(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearchEXR2(yellowPages, 'Apple Store'));                // 0

console.log(binarySearchEXR2([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearchEXR2([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearchEXR2([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearchEXR2(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1

console.log(binarySearchEXR2(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
