// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(list, bookName) {
  const arr = [];
  list.forEach(e => {
    arr.push(e);
  });
  arr.push(bookName);

  return arr;
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(list, bookName) {
  const arr = [];
  list.forEach(e => {
    arr.push(e);
  });

  const book_index = arr.indexOf(bookName);
  if (book_index >= 0) {

    arr.splice(book_index, 1);
    return arr;

    // Add your code above this line
  }
  return arr;
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(newBookList);
console.log((add(bookList, 'A Brief History of Time')));
