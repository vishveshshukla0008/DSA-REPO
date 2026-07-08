// found vowels in the given string !

let str = "Vishwesh shukla aeiou";

function countVowels(s) {
    let count = 0;
    for(let el of s) {
        if(el == "a" || el == "e" || el == "i" || el == "o"|| el == "u" || el == "A" || el == "E" || el == "I" || el == "O" || el == "U") {
            count++;
        }
    }

    return count;
}

console.log(countVowels(str))