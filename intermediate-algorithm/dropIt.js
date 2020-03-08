/**
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

function dropElements(arr, func) {
  const final = arr.findIndex(func);
  
  return final === -1 ? [] : arr.slice(final);
}

console.log(dropElements([10, 500, 11, 12, 13], function(n) {return n < 3; }));
