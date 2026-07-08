let n = 1;

function printFibonacciNumbers(n) {
    if(n <= 0) return;
    let i=0;
    let first = 0;
    let second = 1;
    process.stdout.write(`${first} `);
    if(n <= 1) return;
    process.stdout.write(`${second} `);
    while(i !== n-2) {
        let sum = first + second;
        first = second;
        second = sum;
        process.stdout.write(`${sum} `);
        i++;
    }
}

printFibonacciNumbers(2);