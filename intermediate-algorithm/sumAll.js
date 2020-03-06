// function sumAll(arr) {
//   let sorted = arr.sort((a, b) => a - b);
//   const newArr = [sorted[0]];


//   for (let i = (sorted[0] + 1); i <= sorted[1]; i++) {
//     newArr.push(i);
//   }
//   return newArr.reduce((accumulator, current) => accumulator + current);
// }

function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1]));
