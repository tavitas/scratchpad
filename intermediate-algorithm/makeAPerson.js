
const Person = function (firstAndLast) {
  let fullName = firstAndLast;
  let first = firstAndLast.split(" ")[0];
  let last = firstAndLast.split(" ")[1];

  this.getFullName = function () {
    return fullName;
  };
  this.getFirstName = function () {
    return first;
  };
  this.getLastName = function () {
    return last;
  };

  this.setFullName = function (name) {
    fullName = name;
    first = name.split(' ')[0];
    last = name.split(' ')[1];
  }

  this.setFirstName = function (f) {
    first = f;
    this.setFullName(f + " " + last);
  }

  this.setLastName = function (l) {
    last = l;
    this.setFullName(first + " " + l);
  };
};


var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
// console.log(bob.getFirstName());
// console.log(bob.setFirstName('Nojan'));
bob.setFirstName('Nojan');
console.log(bob.getFirstName());
console.log(bob.getFullName());

