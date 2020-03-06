function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  const newArr = [...arr].sort((a, b) => a - b);
  console.log(newArr);
  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    count++;
    if (num <= newArr[i]) {
      console.log(`i is ${i}`);
      return i;
    }
  }
  return count;
}

// console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
// console.log(getIndexToIns([5, 3, 20, 3], 5));

console.log(getIndexToIns([2, 5, 10], 15));
