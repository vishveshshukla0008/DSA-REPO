let num = 3;

function findFact(n) {
    if(n == 0 || n == 1) return 1;
    let ans = 1;
    for(let i=2; i<= n; i++) {
        ans *= i;
    }

    return ans;
}

console.log(findFact(num))