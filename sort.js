function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

function alphabeticalOrder(arr) {
  return arr.sort(function (a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  });
}

// equivalent with above
function alphabeticalOrder2(arr) {
  return arr.sort(function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  });
}

console.log(alphabeticalOrder2(["a", "d", "c", "a", "z", "g"]));
