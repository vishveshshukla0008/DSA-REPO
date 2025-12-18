let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let start = 0;
let end = arr.length - 1;
let target = 6;
let idx = null;

while (start <= end) {

    // Calculate Mid :

    let mid = start + Math.floor((end - start) / 2);

    // check cases

    // when mid is our target :
    if (arr[mid] == target) {
        idx = mid;
        break;
    }

    if (arr[mid] > target) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
}

console.log(idx)
