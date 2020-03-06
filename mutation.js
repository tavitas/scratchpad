function mutation(arr) {
  arr.forEach(e => e.toLowerCase());
  const firstArr = arr[0].toString().toLowerCase().split('');
  const secondArr = arr[1].toString().toLowerCase().split('');

  for (let i = 0; i < secondArr.length; i++) {
    if (!firstArr.includes(secondArr[i])) {
      return false;
    }
  }
  return true;
}

// console.log(mutation(["hello", "hel"]));
console.log(mutation(["hello", "Hello"]));
