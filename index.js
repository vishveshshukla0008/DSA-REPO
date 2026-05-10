// Quick Sort :
let arr = [10, 20, 10, 0, 5];
function quickSort(arr, start, end) {
  if (start >= end) return;
  let pivot = arr[end];
  let pivotIndex = findPivotIndex(arr, start, end, pivot);
  quickSort(arr, start, pivotIndex-1);
  quickSort(arr, pivotIndex+1, end);
}

function findPivotIndex(arr, start, end, pivot) {
  let i = start - 1,
    j = start;
  while (j < end) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
    j++;
  }
  swap(arr, i + 1, end);
  return i + 1;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

console.log("Before Sorting -> ", arr);
quickSort(arr, 0, arr.length - 1);
console.log("After Sorting -> ", arr);
