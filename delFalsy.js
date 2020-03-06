function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
