// check the ith bit is 1 or 0

function getIthBit(num, i) {
    console.log((num >> i) & 1);
}


getIthBit(13, 2);


function checkNumberIsEvenOrOdd(num) {
    // find the last bit only 

    // if 1 -> then odd 
    console.log((num & 1) == 0 ? "even" : "odd")

    // if 0 -> then even
}

checkNumberIsEvenOrOdd(2) // 0
checkNumberIsEvenOrOdd(3) // 1
checkNumberIsEvenOrOdd(4) //0


//swap the numbers using bits :

function swapUsingBits(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log(`a = ${a} || b = ${b}`)
}

swapUsingBits(10, 14)


// flip the bit if 1 then 0 or viceversa :

function flipBit(num, i) {
    const mask = 1 << i;
    console.log(num & mask)
}

flipBit(10, 1)


// check the number is the power of two or not  :

function chcekInPowerOfTwo(num) {

    // 32 => 10000
    // 31 => 01111

    //8 => 1000
    //7 => 0111

    // for power of n it is must to msb 1 and all are 0 so if result of num & prev == 0 true otherwise false
    return num & (num - 1) ? false : true;
}

console.log(chcekInPowerOfTwo(8));


