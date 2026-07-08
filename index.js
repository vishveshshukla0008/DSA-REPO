str = "cababac";

function checkPalindrome(s) {
    let i=0, j= str.length-1;

    while(i != j) {
        if(s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

console.log(checkPalindrome(str));