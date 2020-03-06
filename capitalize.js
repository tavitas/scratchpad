function titleCase(str) {
  let lower =  str.toLowerCase().split(' ');
  for (let i = 0; i < lower.length; i++) {
    lower[i] = lower[i][0].toUpperCase() + lower[i].slice(1);
  }
  return lower.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
