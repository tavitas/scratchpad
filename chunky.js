function chunkArrayInGroups(arr, size) {
  const myArr = [];

  // keep creating new arrays with splice with elements from arr with size number of elements until its empty
  while (arr.length > 0) {
    myArr.push(arr.splice(0, size));
  }
  return myArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
