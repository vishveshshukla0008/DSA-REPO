function checkISBNNumber(n) {

    if (n.length != 10) {
        console.log("ISBN number must be at least 10 digits long");
        return;
    }

    let sum = 0;
    let place = 10;
    for (let i = 0; i < 10; i++) {
        sum += Number(n[i]) * place--;
    }

    return sum % 11 == 0
}

let n = "0471958697";

console.log(checkISBNNumber(n))