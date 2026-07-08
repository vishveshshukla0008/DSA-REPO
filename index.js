let arr = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

function checkTwoArraysAreEqual(arr, arr2) {
  if (arr.length !== arr2.length) return false;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] !== arr2[i]) return false;
    i++;
  }
  return true;
}

console.log(checkTwoArraysAreEqual(arr, arr2));
