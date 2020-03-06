const whatIsInAName = (collection, source) => {
  const sourceKeys = Object.keys(source);

  // filter the collection by checking if all the keys in the source object is also present in the collection item
  // then check if the value the collection item key is equal to the value of the source key
  return collection.filter(e => sourceKeys.every(item => {
    return item in e ? e[item] === source[item] : false;
  }));
};

// console.log(whatIsInAName(names, source));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
