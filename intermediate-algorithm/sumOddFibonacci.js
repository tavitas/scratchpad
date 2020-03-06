function fibonacci(num) {
  let prev = 1, curr = 1;
  const arr = [prev, curr];

  while (curr + prev <= num) {
    let sum = curr + prev;

    if (sum % 2 === 1) {
      arr.push(sum);
    }

    prev = curr;
    curr = sum;
  }
  console.log(arr);
  return arr.reduce((a, c) => a + c);
}

console.log(fibonacci(75025));
