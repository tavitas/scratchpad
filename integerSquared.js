const squareList = (arr) => {
  // only change code below this line
  let nums = arr
  .filter(num => Number.isInteger(num) && num > 0)
  .map(num => num ** 2);

  return nums;
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
