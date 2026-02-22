// recursion :

// print Hello world recursively :

function printHello(n) {
    // base case :
    if (n == 0) return;

    // kaam 

    console.log("hello")

    // recursive call :
    return printHello(n - 1);
}

printHello(5);



// print 1 to n :

function print(n) {
    if (n == 0) return;

    print(n - 1);


    console.log(n);
}


print(10)


function sumUptoN(n) {
    if (n == 0) return 0;
    return n + sumUptoN(n - 1);
}

console.log(sumUptoN(5));





