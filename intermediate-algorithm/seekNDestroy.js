function destroyer(arr) {
  const [x, ...args] = arguments;

  return x.filter(e => !args.includes(e));

}

const lol = {
  name: 'Tavita',
  position: 'Environmental Information Systems Developer and Analyst',
  programme: 'Environmental Monitoring and Governance',
};

const myFunction = (arr, ...args) => arr.filter(e => !args.includes(e));


// console.log(lol);

console.log(myFunction([1, 2, 3, 1, 2, 3], 2, 3));
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
