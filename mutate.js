// the global variable
var fixedValue = 4;

function incrementer() {
  // Add your code below this line
  const num = fixedValue + 1;
  return num;
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(newValue);
console.log(fixedValue); // Should print 4
