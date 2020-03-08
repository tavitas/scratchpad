/**
 * Flatten a nested array. You must account for varying levels of nesting.
 */

function steamrollArray(arr) {
  if (arr.length === 1) {
    return !Array.isArray(arr[0]) ? arr[0] : steamrollArray(arr[0]);
  } else {
    return arr.reduce((acc, curr) => {
      return !Array.isArray(curr) ? acc.concat(curr) : acc.concat(steamrollArray(curr));
    }, []);
  }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [[[[2]]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
