// Remove Duplicates from array !

let arr = [1,2,8,2,3,4,4,4,5,6,7];

function removeDuplicates(arr) {
    let ans = [];
    arr.sort();
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== arr[i-1]) {
            ans.push(arr[i]);
        }
    }
    console.log(ans);
    return ans;
}

removeDuplicates(arr)