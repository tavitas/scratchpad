function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  const regex = /[\s_]+/g;
  const regex2 = /([A-Z])/g;
  return str.replace(regex2,' $1').trim().replace(regex, '-').toLowerCase();
  // return str.replace(regex, '-');

  // console.log(str.toLowerCase().split(/[\W_]/));
}

console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("Teletubbies say Eh-oh"));
