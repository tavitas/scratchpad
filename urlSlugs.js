// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.trim().toLowerCase().split(/\W+/).join('-');
}
// Add your code above this line

var winterComing = urlSlug(" Winter Is   Coming"); // Should be "winter-is-coming"

console.log(winterComing);
