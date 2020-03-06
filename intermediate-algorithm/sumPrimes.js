/**
 * A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
 * Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

function sumPrimes(num) {
  // create an array from 2 up to num (inclusive)
  // we want to exclude 1 from the array because 1 is not a prime number
  const arr = Array.from(Array(num - 1), (e, i) => i + 2);
  let sum = 0;
  const final = [];

  // go through each element in arr and create sub-arrays from 1 up to the element eg. e = 5 => [1, 2, 3, 4, 5]
  // check that e is divisible only by 1 and itself eg. 5/1, 5/2, 5/3, 5/4, 5/5 should return true if
  arr.map((e) => {
    const inner = Array.from(Array(e), (c, i) => i + 1);

    const prime = !inner.some(item => {
      if (item !== 1 && item !== e) {
        return e % item === 0;
      }
    });
    if (prime) {
      sum += e;
      final.push(e);
    }
  });
  console.log(final);
  return sum;
}

// console.log(sumPrimes(10));
console.log(sumPrimes(100));
