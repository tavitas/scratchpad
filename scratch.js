let arr = ['tavitas', 'teuilajanef', 'mosies', 'taimanes', 'porotesanom', 'lagir'];

function delItem(index) {
  let i = index;
  i++;
  console.log(index, i);
  const itemsBeforeDel = arr.splice(0, index);
  console.log(`items before index: ${itemsBeforeDel}`);
  console.log(arr);
  const itemsAfterDel = arr.splice(1);
  console.log(`items after index: ${itemsAfterDel}`);
  console.log(arr);
  return itemsBeforeDel.concat(itemsAfterDel);
}

console.log(delItem(2));

