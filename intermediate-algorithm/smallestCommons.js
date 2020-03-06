/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  const num1 = arr[0], num2 = arr[1];
  const seq = generateSequence(num1, num2);
  let count = 1;

  while (true) {
    let multiple = num2 * count;
    if (isMultiple(multiple, num1)) {
      if(seq.every(e => isMultiple(multiple, e))) {
        return multiple;
      }
    }
    count++;
  }
}

function isMultiple(x, y) {
  return x % y === 0 ? true : false;
}

function generateSequence(min, max) {
  const numsArr = [];
  while (min <= max) {
    numsArr.push(min);
    min++;
  }
  return numsArr;
}


console.log(smallestCommons([1, 5]));
